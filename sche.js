// const mon = require("mongoose")
// const pollcrea = mon.Schema({
//   username: String,
// email:String,
// password: Number})
// const login = mon.model("pollweb",pollcrea);
// module.exports={login};
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
    
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
