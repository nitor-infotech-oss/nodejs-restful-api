var mongoose = require('mongoose');  
var CustomerSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('Customer', CustomerSchema);

module.exports = mongoose.model('Customer');