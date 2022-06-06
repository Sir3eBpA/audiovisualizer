const Joi = require('joi');

const getAudio = {
  body: Joi.object().keys({
    youtubeUrl: Joi.string().uri().required(),
  }),
};

module.exports = {
  getAudio,
};
