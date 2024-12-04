const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.creaking = function(){
    console.log(this.name + " - находятся в Литве")
    }
const Gate = mongoose.model('Gate', schema);
const  collar_ring = new Gate({ name: 'Ворота Рассвета' });
collar_ring.save().then(() => collar_ring.creaking());
