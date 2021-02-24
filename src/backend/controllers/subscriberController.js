const dbService = require('../services/dbService');
const Subscriber = require('../models/subscriber');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await dbService.findAllPopulate(Subscriber, '');

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
      const result = await dbService.find(Subscriber, query);

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
      const { subscriberID } = req.params;
      const result = await dbService.find(Subscriber, { _id: subscriberID });

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
      const genSubscriber = req.body;
      const result = await dbService.create(Subscriber, genSubscriber);

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { subscriberID } = req.params;
      const updateSubscriber = req.body;
      const result = await dbService.update(
        Subscriber,
        { _id: subscriberID },
        updateSubscriber
      );

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
      const { subscriberID } = req.params;
      const result = await dbService.remove(Subscriber, { _id: subscriberID });

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
