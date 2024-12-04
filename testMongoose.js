const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Gate = require('./models/Gate.js').Gate
var gate = new Gate({
title: "Бранденбургские ворота",
nick:"Brandenburg_Gate"
})
gate.save();