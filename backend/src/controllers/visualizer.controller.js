const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { visualizerService } = require('../services');
const ApiError = require('../utils/ApiError');

const createVisualizer = catchAsync(async (req, res) => {
  const incomingData = { ...req.body };
  incomingData.previewUrl = req.file.location;

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

  const jsonData = JSON.stringify(data);
  res.status(httpStatus.OK).send(jsonData);
});

module.exports = {
  createVisualizer,
  getVisualizer,
  getTopVisualizers,
};
