var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});


module.exports = router;
