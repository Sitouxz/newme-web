const express = require('express');
const router = express.Router();
const path = require('path')
const AppController = require('../controllers/App');
router.get('/data', AppController.data);
router.get('/news', AppController.news);
router.get('/', (req, res, next) => {
    // res.redirect('https://newme-web.herokuapp.com')
    res.redirect('https://github.com/edwinhati/newme/')

})
router.get('/vaccine', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public", "index.html"));
})
router.get('/vaccine/information', (req, res) => {
    res.redirect('https://covid19.go.id/dokumentasi-api-faskes-vaksinasi');
})
module.exports = router;