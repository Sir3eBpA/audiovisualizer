const { Visualizer } = require('../models');

const createVisualizer = async (body) => {
  const visualizer = await Visualizer.create(body);
  return visualizer;
};

const getVisualizers = async (props) => {
  const visualizers = await Visualizer.find()
    .limit(parseInt(props.limit, 10) || 20)
    .sort(props.sort || 'asc')
    .exec();
  return visualizers;
};

module.exports = {
  createVisualizer,
  getVisualizers,
};
