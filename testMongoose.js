const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Gate = mongoose.model('Gate', { name: String });
const  collar_ring = new Gate({ name: 'Ворота Рассвета' });
collar_ring.save().then(() => console.log('И еще одни ворота'));
