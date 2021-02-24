const dbService = require('../services/dbService');
const Gallery = require('../models/gallery');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await dbService.findAll(Gallery);

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
      const result = await dbService.find(Gallery, query);

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
      const { galleryID } = req.params;
      const result = await dbService.find(Gallery, { _id: galleryID });

      if (!result) {
        return next(new ErrorResponse('No gallery found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const genGallery = req.body;
      const result = await dbService.create(Gallery, genGallery);

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { galleryID } = req.params;
      const updateGallery = req.body;
      const result = await dbService.update(
        Gallery,
        { _id: galleryID },
        updateGallery
      );

      if (!result) {
        return next(new ErrorResponse('No gallery found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      const { galleryID } = req.params;
      const result = await dbService.remove(Gallery, { _id: galleryID });

      if (!result) {
        return next(new ErrorResponse('No gallery found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
};
