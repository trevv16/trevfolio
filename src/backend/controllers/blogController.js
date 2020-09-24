const dbService = require('../services/dbService');
const Blog = require('../models/blog');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Blog);
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Blog, query);
    res.send(result);
  },
  getById: async (req, res, next) => {
    const blogID = req.params.blogID;
    const result = await dbService.find(Blog, { _id: blogID });
    res.send(result);
  },
  create: async (req, res, next) => {
    const genBlog = req.body;
    const result = await dbService.create(Blog, genBlog);

    res.send(result);
  },
  update: async (req, res, next) => {
    const blogID = req.params.blogID;
    const updateBlog = req.body;
    const result = await dbService.update(Blog, { _id: blogID }, updateBlog);

    res.send(result);
  },
  remove: async (req, res, next) => {
    const blogID = req.params.blogID;
    const result = await dbService.remove(Blog, { _id: blogID });

    res.send(result);
  }
};
