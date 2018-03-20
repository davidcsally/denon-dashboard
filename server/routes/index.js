const router = require('express').Router();
const volumeRoutes = require('./volumeRoutes');
const powerRoutes = require('./powerRoutes');

router.use('/power', powerRoutes);
router.use('/volume', volumeRoutes);

module.exports = router;
