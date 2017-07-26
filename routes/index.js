var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { content: 'Express is cool!' });
});

module.exports = router;
