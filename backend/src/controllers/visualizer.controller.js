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

const getVisualizers = catchAsync(async (req, res) => {
  const data = await visualizerService.getVisualizers(req.query);
  if (!data || data.length === 0) {
    res.status(httpStatus.OK).send('{}');
  }

  const jsonData = JSON.stringify(data);
  res.status(httpStatus.OK).send(jsonData);
});

module.exports = {
  createVisualizer,
  getVisualizers,
};
