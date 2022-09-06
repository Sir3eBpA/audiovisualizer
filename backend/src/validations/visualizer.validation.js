const Joi = require('joi');

const createVisualizer = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    json: Joi.string().required(),
  }),
  file: Joi.string().required(),
};

const getVisualizer = {
  params: Joi.object().keys({
    id: Joi.string().required().min(1).max(350),
  }),
};

const getTopVisualizers = {
  query: Joi.object().keys({
    limit: Joi.number().optional(),
    sort: Joi.string().valid('asc', 'desc'),
    skip: Joi.number().optional(),
  }),
};

module.exports = {
  createVisualizer,
  getVisualizer,
  getTopVisualizers,
};
