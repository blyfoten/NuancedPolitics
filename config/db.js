const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/NuancedPolitics';

mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch((error) => console.log('MongoDB connection error:', error));

module.exports = mongoose;
