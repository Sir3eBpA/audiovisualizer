const path = require('path');
const fs = require('fs');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const fsPromises = fs.promises;

const getDefaultAudio = catchAsync(async (req, res) => {
  const directoryPath = path.join(__dirname, '../../public/audio');
  const defaultAudio = [];

  const files = await fsPromises.readdir(directoryPath);

  for (let i = 0; i < files.length; ++i) {
    defaultAudio.push(`/audio/${files[i]}`);
  }

  res.status(httpStatus.OK).json(defaultAudio);
});

module.exports = {
  getDefaultAudio,
};
