const dbService = require('../services/dbService');
const Resume = require('../models/resume');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Resume);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Resume, query);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  getById: async (req, res, next) => {
    const resumeID = req.params.resumeID;
    const result = await dbService.find(Resume, { _id: resumeID });
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  create: async (req, res, next) => {
    const genResume = req.body;
    const result = await dbService.create(Resume, genResume);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  update: async (req, res, next) => {
    const resumeID = req.params.resumeID;
    const updateResume = req.body;
    const result = await dbService.update(
      Resume,
      { _id: resumeID },
      updateResume
    );

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  remove: async (req, res, next) => {
    const resumeID = req.params.resumeID;
    const result = await dbService.remove(Resume, { _id: resumeID });

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  }
};
