const dbService = require('../services/dbService');
const Skill = require('../models/skill');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Skill);
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Skill, query);
    res.send(result);
  },
  create: async (req, res, next) => {
    const genSkill = req.body;
    const result = await dbService.create(Skill, genSkill);

    res.send(result);
  },
  update: async (req, res, next) => {
    const skillID = req.params.skillID;
    const updateSkill = req.body;
    const result = await dbService.update(Skill, { _id: skillID }, updateSkill);

    res.send(result);
  },
  remove: async (req, res, next) => {
    const skillID = req.params.skillID;
    const result = await dbService.remove(Skill, { _id: skillID });

    res.send(result);
  }
};
