const dbService = require('../services/dbService');
const Project = require('../models/project');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Project);
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Project, query);
    res.send(result);
  },
  create: async (req, res, next) => {
    const genProject = req.body;
    const result = await dbService.create(Project, genProject);

    res.send(result);
  },
  update: async (req, res, next) => {
    const projectID = req.params.projectID;
    const updateProject = req.body;
    const result = await dbService.update(
      Project,
      { _id: projectID },
      updateProject
    );

    res.send(result);
  },
  remove: async (req, res, next) => {
    const projectID = req.params.projectID;
    const result = await dbService.remove(Project, { _id: projectID });

    res.send(result);
  }
};