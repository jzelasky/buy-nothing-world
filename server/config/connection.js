const mongoose = require('mongoose' || 'mongodb://127.0.0.1:27017/buy-nothing-world');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts');

module.exports = mongoose.connection;
