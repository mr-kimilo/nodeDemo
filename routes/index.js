var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/example/login', function(req, res) {
    res.render('login.html');
});
router.get('/example/ajaxtable', function(req, res) {
    res.render('usertable.html');
});
router.get('/example/mlogin', function(req, res) {
    res.render('mobilelogin.html');
});
router.get('/mindex', function(req, res) {
    res.render('mindex.html');
});

module.exports = router;
