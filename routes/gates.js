var express = require('express');
var router = express.Router();
var Gate = require('../models/Gate').Gate;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с gates');
});
router.get("/:nick",checkAuth, async function(req, res, next) {
  var gates = await Gate.find({nick: req.params.nick});
  console.log(gates)
  if(!gates.length) return next(new Error("я таких ворот не знаю"))
  var gate = gates[0];
  res.render('gate', {
  title: gate.title,
  picture: gate.avatar,
  desc: gate.desc  })
});
    
module.exports = router;
