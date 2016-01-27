var mongoUrl = '127.0.0.1:27017/serv';
var mongoose = require('mongoose');
mongoose.connect(mongoUrl);

schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  name: String,
  password: String,
  lists: Array
});

model = mongoose.model('users', schema);
module.exports = model;
