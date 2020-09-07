const dbService = require('../services/dbService');
const MailingList = require('../models/mailing_list');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(MailingList);
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(MailingList, query);
    res.send(result);
  },
  create: async (req, res, next) => {
    const genMailingList = req.body;
    const result = await dbService.create(MailingList, genMailingList);

    res.send(result);
  },
  update: async (req, res, next) => {
    const mailingListID = req.params.id;
    const updateMailingList = req.body;
    const result = await dbService.update(
      MailingList,
      { _id: mailingListID },
      updateMailingList
    );

    res.send(result);
  },
  remove: async (req, res, next) => {
    const mailingListID = req.params.id;
    const result = await dbService.remove(MailingList, { _id: mailingListID });

    res.send(result);
  }
};
