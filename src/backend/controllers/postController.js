const dbService = require('../services/dbService');
const Post = require('../models/post');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Post);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Post, query);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  getById: async (req, res, next) => {
    const postID = req.params.projectID;
    const result = await dbService.find(Post, { _id: postID });
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  create: async (req, res, next) => {
    const genPost = req.body;
    const result = await dbService.create(Post, genPost);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  update: async (req, res, next) => {
    const postID = req.params.postID;
    const updatePost = req.body;
    const result = await dbService.update(Post, { _id: postID }, updatePost);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  remove: async (req, res, next) => {
    const postID = req.params.postID;
    const result = await dbService.remove(Post, { _id: postID });

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  }
};
