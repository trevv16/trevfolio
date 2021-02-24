const dbService = require('../services/dbService');
const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await dbService.findAll(User);

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
      const result = await dbService.find(User, query);

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
      const { userID } = req.params;
      const result = await dbService.find(User, { _id: userID });

      if (!result) {
        return next(new ErrorResponse('No subscriber found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const genUser = req.body;
      const result = await dbService.create(User, genUser);

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { userID } = req.params;
      const updateUser = req.body;
      const result = await dbService.update(User, { _id: userID }, updateUser);

      if (!result) {
        return next(new ErrorResponse('No subscriber found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      const { userID } = req.params;
      const result = await dbService.remove(User, { _id: userID });

      if (!result) {
        return next(new ErrorResponse('No subscriber found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
};
