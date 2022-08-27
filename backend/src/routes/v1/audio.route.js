const express = require('express');
const validation = require('../../validations/audio.validation');
const controller = require('../../controllers/audio.controller');

const router = express.Router();

router.get('/default', controller.getDefaultAudio);

module.exports = router;
