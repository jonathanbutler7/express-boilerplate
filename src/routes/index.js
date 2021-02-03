const router = require('express').Router();
const scores = require('./scores-router');

router.use('/scores', scores);

module.exports = router;
