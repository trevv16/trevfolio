/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
  getUserById: (id) => {
    try {
      return User.find({ _id: id }).exec();
    } catch (e) {
      console.error('DB Find Error', e.message);
    }
  },
  getUserByEmail: (email) => {
    try {
      return User.find({ email }).exec();
    } catch (e) {
      console.error('DB Find Error', e.message);
    }
  },
  create: (Model, genObj) => {
    const obj = new Model(genObj);
    obj._id = new mongoose.Types.ObjectId();
    obj
      .save()
      .then((response) => response)
      .catch((e) => {
        console.error('DB Create Error:', e);
      });
  },
  find: (Model, query) => {
    try {
      return Model.find(query).exec();
    } catch (e) {
      console.error('DB Find Error', e.message);
    }
  },
  findAll: (Model) => {
    try {
      return Model.find().exec();
    } catch (e) {
      console.error('DB FindAll Error', e.message);
    }
  },
  findAllPopulate: (Model, query, pop) => {
    try {
      return Model.find().populate(pop).exec();
    } catch (e) {
      console.error('DB Find-Populate Error', e.message);
    }
  },
  search: (Model, query) => {
    try {
      return Model.find(query).exec();
    } catch (e) {
      console.error('DB Search Error', e.message);
    }
  },
  findPopulate: (Model, query, pop) => {
    try {
      return Model.find(query).populate(pop).exec();
    } catch (e) {
      console.error('DB Find-Populate Error', e.message);
    }
  },
  findFilterPopulate: (Model, query, projection, pop) => {
    try {
      return Model.find(query, projection).populate(pop).exec();
    } catch (e) {
      console.error('DB Find-Populate-Filter Error', e.message);
    }
  },
  findFilter: (Model, query, projection) => {
    try {
      return Model.find(query, projection).exec();
    } catch (e) {
      console.error('DB Find-Filter Error', e.message);
    }
  },
  findReplace: (Model, query, obj) => {
    try {
      return Model.findOneAndReplace(query, obj, {
        new: true,
        lean: true,
        omitUndefined: true
      }).exec();
    } catch (e) {
      console.error('DB Find-Replace Error', e.message);
    }
  },
  update: (Model, query, obj) => {
    try {
      return Model.findOneAndUpdate(query, obj, {
        new: true,
        lean: true,
        omitUndefined: true
      }).exec();
    } catch (e) {
      console.error('DB Update Error', e.message);
    }
  },
  remove: (Model, query) => {
    try {
      return Model.findOneAndRemove(query).exec();
    } catch (e) {
      console.error('DB Remove Error', e.message);
    }
  }
};
