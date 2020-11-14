const dbService = require('../services/dbService');
const Gallery = require('../models/gallery');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAll(Gallery);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Gallery, query);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  getById: async (req, res, next) => {
    const galleryID = req.params.galleryID;
    const result = await dbService.find(Gallery, { _id: galleryID });
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  create: async (req, res, next) => {
    const genGallery = req.body;
    const result = await dbService.create(Gallery, genGallery);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  update: async (req, res, next) => {
    const galleryID = req.params.galleryID;
    const updateGallery = req.body;
    const result = await dbService.update(
      Gallery,
      { _id: galleryID },
      updateGallery
    );

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  remove: async (req, res, next) => {
    const galleryID = req.params.galleryID;
    const result = await dbService.remove(Gallery, { _id: galleryID });

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  }
};
