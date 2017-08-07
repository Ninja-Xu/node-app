var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/', function(req, res, next) {
  res.render('users', {name: req.body.name, job: req.body.job});
});

module.exports = router;
