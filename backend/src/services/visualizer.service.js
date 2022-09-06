const { Visualizer } = require('../models');

const createVisualizer = async (body) => {
  const visualizer = await Visualizer.create(body);
  return visualizer;
};

const getTopVisualizers = async (props) => {
  const visualizers = await Visualizer.find()
    .limit(parseInt(props.limit, 10) || 20)
    .skip(parseInt(props.skip, 10) || 0)
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
