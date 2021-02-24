const dbService = require('../services/dbService');
const Inquiry = require('../models/inquiry');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await dbService.findAll(Inquiry);

      if (!result) {
        return next(new ErrorResponse('No inquiries found', 404));
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
      const result = await dbService.find(Inquiry, query);

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
      const { inquiryID } = req.params;
      const result = await dbService.find(Inquiry, { _id: inquiryID });

      if (!result) {
        return next(new ErrorResponse('No inquiry found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const genInquiry = req.body;
      const result = await dbService.create(Inquiry, genInquiry);

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { inquiryID } = req.params;
      const updateInquiry = req.body;
      const result = await dbService.update(
        Inquiry,
        { _id: inquiryID },
        updateInquiry
      );

      if (!result) {
        return next(new ErrorResponse('No inquiry found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      const { inquiryID } = req.params;
      const result = await dbService.remove(Inquiry, { _id: inquiryID });

      if (!result) {
        return next(new ErrorResponse('No inquiry found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
};
