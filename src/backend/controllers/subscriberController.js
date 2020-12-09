const dbService = require('../services/dbService');
const Subscriber = require('../models/subscriber');

module.exports = {
  getAll: async (req, res, next) => {
    const result = await dbService.findAllPopulate(Subscriber, '');
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  get: async (req, res, next) => {
    const query = req.body;
    const result = await dbService.find(Subscriber, query);
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  getById: async (req, res, next) => {
    const subscriberID = req.params.subscriberID;
    const result = await dbService.find(Subscriber, { _id: subscriberID });
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  create: async (req, res, next) => {
    const genSubscriber = req.body;
    const result = await dbService.create(Subscriber, genSubscriber);

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  update: async (req, res, next) => {
    const subscriberID = req.params.subscriberID;
    const updateSubscriber = req.body;
    const result = await dbService.update(
      Subscriber,
      { _id: subscriberID },
      updateSubscriber
    );

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  },
  remove: async (req, res, next) => {
    const subscriberID = req.params.subscriberID;
    const result = await dbService.remove(Subscriber, { _id: subscriberID });

    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  }
};
