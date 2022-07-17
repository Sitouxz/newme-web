const express = require('express');
const router = express.Router();
const AppController = require('../controllers/App');
const VaccineController = require('../controllers/Vaccine');

router.get('/data', AppController.data);
router.get('/news', AppController.news);
router.get('/vaccine', VaccineController.main);
router.get('/vaccine/information', (req, res, next) => {
    res.redirect('https://covid19.go.id/dokumentasi-api-faskes-vaksinasi')  
});
router.get('/', (req, res, next) => {
    // res.redirect('https://newme-web.herokuapp.com')
    res.redirect('https://github.com/edwinhati/newme/tree/api')

})

module.exports = router;