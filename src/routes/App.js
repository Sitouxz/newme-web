const express = require('express');
const router = express.Router();
const AppController = require('../controllers/App');

router.get('/data', AppController.data);
router.get('/news', AppController.news);
router.get('/', AppController.home);

module.exports = router;