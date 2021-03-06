var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('forecast');
});
router.get('/predict', function(req, res, next) {
  res.render('predict');
});

router.get('/weather', function(req, res, next) {
  res.render('weather');
});

module.exports = router;
