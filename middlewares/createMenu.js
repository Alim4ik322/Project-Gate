var Gate = require("../models/Gate").Gate
module.exports = async function(req,res,next){
res.locals.nav = []
var menu = await Gate.find(null,{_id:0,title:1,nick:1});
console.log(menu);
if (menu.length != 0) {
res.locals.nav = menu;
}
next();
}