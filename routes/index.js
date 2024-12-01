var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Branderburg Gate page */
router.get('/Branderburg_Gate', function(req, res, next) {
  res.send("<h1> Брандербургские ворота </h1>")
});

/* Golden Gate page */
router.get('/Golden_Gate', function(req, res, next) {
  res.send("<h1> Золотые ворота </h1>")
});

/* Torii Great Gate page */
router.get('/Torii_Great_Gate', function(req, res, next) {
  res.send("<h1> Тории 'Великие ворота' </h1>")
});

module.exports = router;
