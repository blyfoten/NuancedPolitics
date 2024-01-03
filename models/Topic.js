const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  // ... keep existing fields

  arguments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Argument' }]
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
