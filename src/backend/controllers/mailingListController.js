const dbService = require('../services/dbService');
const MailingList = require('../models/mailing_list');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await dbService.findAll(MailingList);

      if (!result) {
        return next(new ErrorResponse('No mailing lists found', 404));
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
      const result = await dbService.find(MailingList, query);

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
      const { mailingListID } = req.params;
      const result = await dbService.find(MailingList, { _id: mailingListID });

      if (!result) {
        return next(new ErrorResponse('No mailing list found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const genMailingList = req.body;
      const result = await dbService.create(MailingList, genMailingList);

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { mailingListID } = req.params;
      const updateMailingList = req.body;
      const result = await dbService.update(
        MailingList,
        { _id: mailingListID },
        updateMailingList
      );

      if (!result) {
        return next(new ErrorResponse('No mailing list found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      const { mailingListID } = req.params;
      const result = await dbService.remove(MailingList, {
        _id: mailingListID
      });

      if (!result) {
        return next(new ErrorResponse('No mailing list found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
};
