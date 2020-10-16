var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inderpreet', function(req, res, next) {
  res.render('inderpreet', { title: 'Express' });
});

router.get('/gurmeer', function(req, res, next) {
  res.render('gurmeer', { title: 'Express' });
});

router.get('/love', function(req, res, next) {
  res.render('love', { title: 'Express' });
});

router.get('/yashpal', function(req, res, next) {
  res.render('yashpal', { title: 'Express' });
});


module.exports = router;
