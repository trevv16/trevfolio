const dbService = require('../services/dbService');
const Blog = require('../models/blog');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await dbService.findAll(Blog);

      if (!result) {
        return next(new ErrorResponse('No blogs found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  get: async (req, res, next) => {
    try {
      const query = req.body;
      const result = await dbService.find(Blog, query);

      if (!result) {
        return next(new ErrorResponse('No Blog found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  getBlogPosts: async (req, res, next) => {
    try {
      const { blogID } = req.params;
      const result = await dbService.findPopulate(
        Blog,
        { _id: blogID },
        'posts'
      );

      if (!result) {
        return next(new ErrorResponse('No blog posts not found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  getById: async (req, res, next) => {
    try {
      const { blogID } = req.params;
      const result = await dbService.find(Blog, { _id: blogID });

      if (!result) {
        return next(new ErrorResponse('No blog found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const genBlog = req.body;
      const result = await dbService.create(Blog, genBlog);

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { blogID } = req.params;
      const updateBlog = req.body;
      const result = await dbService.update(Blog, { _id: blogID }, updateBlog);

      if (!result) {
        return next(new ErrorResponse('No blog found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      const { blogID } = req.params;
      const result = await dbService.remove(Blog, { _id: blogID });

      if (!result) {
        return next(new ErrorResponse('No blog found', 404));
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
};
