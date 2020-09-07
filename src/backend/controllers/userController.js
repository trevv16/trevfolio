const dbService = require('../services/dbService');
const User = require('../models/user');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(User);
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(User, query);
    res.send(result);
  },
  create: async (req, res, next) => {
    const genUser = req.body;
    const result = await dbService.create(User, genUser);

    res.send(result);
  },
  update: async (req, res, next) => {
    const userID = req.params.id;
    const updateUser = req.body;
    const result = await dbService.update(User, { _id: userID }, updateUser);

    res.send(result);
  },
  remove: async (req, res, next) => {
    const userID = req.params.id;
    const result = await dbService.remove(User, { _id: userID });

    res.send(result);
  }
};
