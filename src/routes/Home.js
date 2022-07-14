const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/Home');

router.get('/data', HomeController.data);
router.get('/news', HomeController.news);

module.exports = router;