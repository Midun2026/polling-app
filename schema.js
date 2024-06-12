const mongoose = require('mongoose');
const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    default: 0
  }
});
const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [optionSchema],
    required: true,
    validate: [arrayLimit, '{PATH} must have at least two options']
  }
 
  
});
function arrayLimit(val) {
  return val.length >= 2;
}

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;