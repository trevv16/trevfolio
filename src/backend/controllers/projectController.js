const dbService = require('../services/dbService');
const Project = require('../models/project');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await dbService.findAllPopulate(Project, 'skills');

      if (!result) {
        return next(new ErrorResponse('No projects found', 404));
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
      const result = await dbService.find(Project, query);

      if (!result) {
        return next(new ErrorResponse('No project found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  getById: async (req, res, next) => {
    try {
      const { projectID } = req.params;
      const result = await dbService.find(Project, { _id: projectID });

      if (!result) {
        return next(new ErrorResponse('No project found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const genProject = req.body;
      const result = await dbService.create(Project, genProject);

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { projectID } = req.params;
      const updateProject = req.body;
      const result = await dbService.update(
        Project,
        { _id: projectID },
        updateProject
      );

      if (!result) {
        return next(new ErrorResponse('No project found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      const { projectID } = req.params;
      const result = await dbService.remove(Project, { _id: projectID });

      if (!result) {
        return next(new ErrorResponse('No project found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
};
