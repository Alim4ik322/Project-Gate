const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Cat = mongoose.model('Gate', { name: String });
const kitty = new Cat({ name: 'Ворота Рассвета' });
kitty.save().then(() => console.log('И еще одни ворота'));
