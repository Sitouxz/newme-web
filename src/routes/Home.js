const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/Home');

router.get('/', HomeController.data);

module.exports = router;