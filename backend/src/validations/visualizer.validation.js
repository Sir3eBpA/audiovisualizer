const Joi = require('joi');

const createVisualizer = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    json: Joi.string().required(),
  }),
};

const getVisualizers = {
  query: Joi.object().keys({
    limit: Joi.number().optional(),
    sort: Joi.string().valid('asc', 'desc'),
  }),
};

module.exports = {
  createVisualizer,
  getVisualizers,
};
