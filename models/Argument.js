const mongoose = require('mongoose');

const argumentSchema = new mongoose.Schema({
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Argument = mongoose.model('Argument', argumentSchema);

module.exports = Argument;
