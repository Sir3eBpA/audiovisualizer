const express = require('express');
const audioValidation = require('../../validations/audio.validation');
const audioController = require('../../controllers/audio.controller');

const router = express.Router();

router.get('/default', audioController.getDefaultAudio);

module.exports = router;
