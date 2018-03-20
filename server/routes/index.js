const router = require('express').Router();
const volumeRoutes = require('./volumeRoutes');

router.use('/volume', volumeRoutes);

module.exports = router;
