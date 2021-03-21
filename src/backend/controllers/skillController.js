const dbService = require('../services/dbService');
const Skill = require('../models/skill');
const ErrorResponse = require('../utils/errorResponse');
const { uploadObject } = require('../utils/s3_helpers');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await dbService.findAll(Skill);

      if (!result) {
        return next(new ErrorResponse('No galleries found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  get: async (req, res, next) => {
    try {
      const query = req.body;
      const result = await dbService.find(Skill, query);

      if (!result) {
        return next(new ErrorResponse('No Blog found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  getById: async (req, res, next) => {
    try {
      const { skillID } = req.params;
      const result = await dbService.find(Skill, { _id: skillID });

      if (!result) {
        return next(new ErrorResponse('No skill found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  getSkillProjects: async (req, res, next) => {
    try {
      const { skillID } = req.params;
      const result = await dbService.findPopulate(
        Skill,
        { _id: skillID },
        'projects'
      );

      if (!result) {
        return next(new ErrorResponse('Skill projects not found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    if (!req.file) {
      return next(new ErrorResponse('No file found', 404));
    }

    try {
      const { name, description, published } = req.body;
      const thumbnail = req.file;
      const s3FolderPath = 'uploads/skills';

      let genSkill = {
        name,
        description,
        projects: req.body?.projects || [],
        published: published === 'true'
      };

      uploadObject(
        process.env.S3_PUBLIC_BUCKET,
        s3FolderPath,
        `${process.env.USER_UPLOADS_FOLDER}/${thumbnail.filename}`,
        thumbnail.mimetype,
        async (err, data) => {
          if (err) {
            return next(new ErrorResponse('Upload to S3 Failed', 404));
          }
          genSkill['thumbnail'] = data.Location;

          const result = await dbService.create(Skill, genSkill);

          res.setHeader('Content-Type', 'application/json');
          res.status(200).json({ success: true, data: result });
        }
      );
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { skillID } = req.params;
      const updateSkill = req.body;
      const result = await dbService.update(
        Skill,
        { _id: skillID },
        updateSkill
      );

      if (!result) {
        return next(new ErrorResponse('No skill found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      const { skillID } = req.params;
      const result = await dbService.remove(Skill, { _id: skillID });

      if (!result) {
        return next(new ErrorResponse('No skill found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
};
