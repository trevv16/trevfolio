const dbService = require('../services/dbService');
const MailingList = require('../models/mailing_list');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(MailingList);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(MailingList, query);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  getById: async (req, res, next) => {
    const mailingListID = req.params.mailingListID;
    const result = await dbService.find(Project, { _id: mailingListID });
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  create: async (req, res, next) => {
    const genMailingList = req.body;
    const result = await dbService.create(MailingList, genMailingList);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  update: async (req, res, next) => {
    const mailingListID = req.params.mailingListID;
    const updateMailingList = req.body;
    const result = await dbService.update(
      MailingList,
      { _id: mailingListID },
      updateMailingList
    );

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  remove: async (req, res, next) => {
    const mailingListID = req.params.mailingListID;
    const result = await dbService.remove(MailingList, { _id: mailingListID });

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  }
};
