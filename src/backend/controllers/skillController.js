const dbService = require('../services/dbService');
const Skill = require('../models/skill');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Skill);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Skill, query);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  getById: async (req, res, next) => {
    const skillID = req.params.skillID;
    const result = await dbService.find(Skill, { _id: skillID });
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  create: async (req, res, next) => {
    const genSkill = req.body;
    const result = await dbService.create(Skill, genSkill);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  update: async (req, res, next) => {
    const skillID = req.params.skillID;
    const updateSkill = req.body;
    const result = await dbService.update(Skill, { _id: skillID }, updateSkill);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  remove: async (req, res, next) => {
    const skillID = req.params.skillID;
    const result = await dbService.remove(Skill, { _id: skillID });

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  }
};
