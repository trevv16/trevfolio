const dbService = require('../services/dbService');
const Email = require('../models/email');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Email);
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Email, query);
    res.send(result);
  },
  create: async (req, res, next) => {
    const genEmail = req.body;
    const result = await dbService.create(Email, genEmail);

    res.send(result);
  },
  update: async (req, res, next) => {
    const emailID = req.params.emailID;
    const updateEmail = req.body;
    const result = await dbService.update(Email, { _id: emailID }, updateEmail);

    res.send(result);
  },
  remove: async (req, res, next) => {
    const emailID = req.params.emailID;
    const result = await dbService.remove(Email, { _id: emailID });

    res.send(result);
  }
};
