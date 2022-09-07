const { Visualizer } = require('../models');

const createVisualizer = async (body) => {
  const visualizer = await Visualizer.create(body);
  return visualizer;
};

const getTopVisualizers = async (props) => {
  const skip = parseInt(props.skip, 10) || 0;
  const limit = (parseInt(props.limit, 10) || 20) + skip;

  const visualizers = await Visualizer.find()
    .skip(skip)
    .limit(limit)
    .sort(props.sort || 'asc')
    .exec();
  return visualizers;
};

const getTotalVisualizersAmount = async () => {
  const totalAmount = await Visualizer.count().exec();
  return totalAmount;
};

const getVisualizer = async (id) => {
  const visualizer = await Visualizer.findById(id).exec();
  return visualizer;
};

module.exports = {
  createVisualizer,
  getVisualizer,
  getTotalVisualizersAmount,
  getTopVisualizers,
};
