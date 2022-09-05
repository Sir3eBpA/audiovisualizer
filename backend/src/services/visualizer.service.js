const { Visualizer } = require('../models');

const createVisualizer = async (body) => {
  const visualizer = await Visualizer.create(body);
  return visualizer;
};

const getTopVisualizers = async (props) => {
  const visualizers = await Visualizer.find()
    .limit(parseInt(props.limit, 10) || 20)
    .sort(props.sort || 'asc')
    .exec();
  return visualizers;
};

const getVisualizer = async (id) => {
  const visualizer = await Visualizer.findById(id).exec();
  return visualizer;
};

module.exports = {
  createVisualizer,
  getVisualizer,
  getTopVisualizers,
};
