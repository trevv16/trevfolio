import { mongoose } from 'mongoose';
const User = require('../models/user');

export const getUserById = (id) => {
  try {
    return User.find({ _id: id }).exec();
  } catch (e) {
    console.error('DB Find Error', e.message);
  }
};

export const getUserByEmail = (email) => {
  try {
    return User.find({ email: email }).exec();
  } catch (e) {
    console.error('DB Find Error', e.message);
  }
};
export const create = (Model, obj) => {
  genObj = new Model();

  obj._id = new mongoose.Types.ObjectId();
  console.log(obj);

  // obj.save().then( function(response) {
  //     return response;
  // })
  // .catch((e) => {
  //     console.error('DB Create Error:', e);
  // });
};

export const find = (Model, query) => {
  try {
    return Model.find(query).exec();
  } catch (e) {
    console.error('DB Find Error', e.message);
  }
};

export const findAll = (Model) => {
  try {
    return Model.find().exec();
  } catch (e) {
    console.error('DB FindById Error', e.message);
  }
};

export const search = (Model, query) => {
  try {
    return Model.find(query).exec();
  } catch (e) {
    console.error('DB Search Error', e.message);
  }
};

export const findPopulate = (Model, query, pop) => {
  try {
    return Model.find(query).populate(pop).exec();
  } catch (e) {
    console.error('DB Find-Populate Error', e.message);
  }
};

export const findFilterPopulate = (Model, query, projection, pop) => {
  try {
    return Model.find(query, projection).populate(pop).exec();
  } catch (e) {
    console.error('DB Find-Populate-Filter Error', e.message);
  }
};

export const findFilter = (Model, query, projection) => {
  try {
    return Model.find(query, projection).exec();
  } catch (e) {
    console.error('DB Find-Filter Error', e.message);
  }
};

export const findReplace = (Model, query, obj) => {
  try {
    return Model.findOneAndReplace(query, obj, {
      new: true,
      lean: true,
      omitUndefined: true,
    }).exec();
  } catch (e) {
    console.error('DB Find-Replace Error', e.message);
  }
};

export const update = async (Model, query, obj) => {
  try {
    return Model.findOneAndUpdate(query, obj, {
      new: true,
      lean: true,
      omitUndefined: true,
    }).exec();
  } catch (e) {
    console.error('DB Update Error', e.message);
  }
};

export const remove = async (Model, query) => {
  try {
    return Model.findOneAndRemove(query).exec();
  } catch (e) {
    console.error('DB Remove Error', e.message);
  }
};
