var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.query.name);
  console.log(req.query.name);
});

router.post('/', function(req, res, next) {
  res.render('users', {name: req.body.name, job: req.body.job});
});

module.exports = router;
