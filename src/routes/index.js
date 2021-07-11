const router = require('express').Router();

const presentationRoute = require('./presentacion');

router.use('/presentacion', presentationRoute);

module.exports = router;