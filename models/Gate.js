var mongoose = require('mongoose')
var Schema = mongoose.Schema
var gateSchema = new Schema({
title: String,
nick: {
type: String,
unique: true,
required: true
},
avatar: String,
desc: String,
created:{
type:Date,
default:Date.now
}
})
module.exports.Gate = mongoose.model("Gate", gateSchema)
