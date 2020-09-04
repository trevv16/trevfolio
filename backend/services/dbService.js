const mongoose = require('mongoose');
const { conformsTo } = require('lodash');
const User = require('../models/user');

module.exports = {
  getUserById: async (email) => {
    try {
      return User.find({ _id: id }).exec();
    } catch (e) {
      console.error('DB Find Error', e.message);
    }
  },
  getUserByEmail: async (email) => {
    try {
      return User.find({ email: email }).exec();
    } catch (e) {
      console.error('DB Find Error', e.message);
    }
  },
  create: async (Model, obj) => {
    genObj = new Model();

    obj._id = new mongoose.Types.ObjectId();
    console.log(obj);

    // obj.save().then( function(response) {
    //     return response;
    // })
    // .catch((e) => {
    //     console.error('DB Create Error:', e);
    // });
  },
  find: async (Model, query) => {
    try {
      return await Model.find(query).exec();
    } catch (e) {
      console.error('DB Find Error', e.message);
    }
  },
  findAll: async (Model) => {
    try {
      return await Model.find().exec();
    } catch (e) {
      console.error('DB FindById Error', e.message);
    }
  },
  search: async (Model, query) => {
    try {
      return await Model.find(query).exec();
    } catch (e) {
      console.error('DB Search Error', e.message);
    }
  },
  findPopulate: async (Model, query, pop) => {
    try {
      return await Model.find(query).populate(pop).exec();
    } catch (e) {
      console.error('DB Find-Populate Error', e.message);
    }
  },
  findFilterPopulate: async (Model, query, projection, pop) => {
    try {
      return await Model.find(query, projection).populate(pop).exec();
    } catch (e) {
      console.error('DB Find-Populate-Filter Error', e.message);
    }
  },
  findFilter: async (Model, query, projection) => {
    try {
      return await Model.find(query, projection).exec();
    } catch (e) {
      console.error('DB Find-Filter Error', e.message);
    }
  },
  findReplace: async (Model, query, obj) => {
    try {
      return await Model.findOneAndReplace(query, obj, {
        new: true,
        lean: true,
        omitUndefined: true,
      }).exec();
    } catch (e) {
      console.error('DB Find-Replace Error', e.message);
    }
  },
  update: async (Model, query, obj) => {
    try {
      return await Model.findOneAndUpdate(query, obj, {
        new: true,
        lean: true,
        omitUndefined: true,
      }).exec();
    } catch (e) {
      console.error('DB Update Error', e.message);
    }
  },
  remove: async (Model, query) => {
    try {
      return await Model.findOneAndRemove(query).exec();
    } catch (e) {
      console.error('DB Remove Error', e.message);
    }
  },
};
