const express = require('express');

const router = express.Router();
const volumeService = require('../services/volumeService');

router.post('/up', volumeService.volumeUp);
router.post('/down', volumeService.volumeDown);
router.post('/:volume', volumeService.volume);

module.exports = router;
