const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { visualizerService } = require('../services');
const ApiError = require('../utils/ApiError');
const { s3Ip, s3Port } = require('../config/config');

const createVisualizer = catchAsync(async (req, res) => {
  const incomingData = { ...req.body };
  incomingData.previewUrl = new URL(`${req.protocol}://${s3Ip}:${s3Port}/${req.file.bucket}/${req.file.key}`).toString();

  const data = await visualizerService.createVisualizer(incomingData);
  if (!data) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Save visualizer returned null/undefined');
  }
  res.status(httpStatus.CREATED).send();
});

const getVisualizer = catchAsync(async (req, res) => {
  const data = await visualizerService.getVisualizer(req.params.id);
  if (!data) {
    res.status(httpStatus.NOT_FOUND).send();
  }

  const jsonData = JSON.stringify(data);
  res.status(httpStatus.OK).send(jsonData);
});

const getTopVisualizers = catchAsync(async (req, res) => {
  const data = await visualizerService.getTopVisualizers(req.query);
  if (!data || data.length === 0) {
    res.status(httpStatus.OK).send('{}');
  }

  const amount = await visualizerService.getTotalVisualizersAmount();
  const finalData = JSON.stringify({ visualizers: data, totalAmount: amount });

  res.status(httpStatus.OK).send(finalData);
});

module.exports = {
  createVisualizer,
  getVisualizer,
  getTopVisualizers,
};
