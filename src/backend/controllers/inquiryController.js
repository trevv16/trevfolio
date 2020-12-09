const dbService = require('../services/dbService');
const Inquiry = require('../models/inquiry');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Inquiry);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Inquiry, query);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  getById: async (req, res, next) => {
    const inquiryID = req.params.inquiryID;
    const result = await dbService.find(Inquiry, { _id: inquiryID });
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  create: async (req, res, next) => {
    const genInquiry = req.body;
    const result = await dbService.create(Inquiry, genInquiry);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  update: async (req, res, next) => {
    const inquiryID = req.params.inquiryID;
    const updateInquiry = req.body;
    const result = await dbService.update(
      Inquiry,
      { _id: inquiryID },
      updateInquiry
    );

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  remove: async (req, res, next) => {
    const inquiryID = req.params.inquiryID;
    const result = await dbService.remove(Inquiry, { _id: inquiryID });

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  }
};
