const mongoose = require('mongoose');
require('mongoose-type-url');
const { toJSON } = require('./plugins');

const visualizerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    json: {
      type: String,
      required: true,
    },
    previewUrl: {
      type: mongoose.SchemaTypes.Url,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
visualizerSchema.plugin(toJSON);

const Visualizer = mongoose.model('Visualizer', visualizerSchema);
module.exports = Visualizer;
