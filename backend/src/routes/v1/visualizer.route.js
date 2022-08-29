const express = require('express');
const controller = require('../../controllers/visualizer.controller');
const { imageUploader } = require('../../services/files.service');
const visualizerValidation = require('../../validations/visualizer.validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.post(
  '/create',
  imageUploader.single('preview'),
  validate(visualizerValidation.createVisualizer),
  controller.createVisualizer
);

router.get('/', validate(visualizerValidation.getVisualizers), controller.getVisualizers);

module.exports = router;
