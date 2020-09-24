const dbService = require('../services/dbService');
const User = require('../models/user');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(User);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(User, query);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  getById: async (req, res, next) => {
    const userID = req.params.userID;
    const result = await dbService.find(User, { _id: userID });
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  create: async (req, res, next) => {
    const genUser = req.body;
    const result = await dbService.create(User, genUser);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  update: async (req, res, next) => {
    const userID = req.params.userID;
    const updateUser = req.body;
    const result = await dbService.update(User, { _id: userID }, updateUser);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  remove: async (req, res, next) => {
    const userID = req.params.userID;
    const result = await dbService.remove(User, { _id: userID });

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  }
};
