var mongoose = require('mongoose'),
	db = mongoose.connection,
	uri = '',
  List = require('./list');

function init(path) {
	uri = path;
	mongoose.connect(uri, { server: { auto_reconnect: true } });
}

db.on('connecting', function() {
  console.log('connecting to MongoDB...');
});

db.on('error', function(error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('connected', function() {
  console.log('MongoDB connected!');
});

db.once('open', function() {
  console.log('MongoDB connection opened!');
  List.load();
});

db.on('reconnected', function () {
  console.log('MongoDB reconnected!');
});

db.on('disconnected', function() {
  console.log('MongoDB disconnected!');
  console.log('MongoDB try to connect after 30s.');

  setTimeout(function() {
    mongoose.connect(uri, { server: { auto_reconnect: true } });
  }, 30000);
});

module.exports.init = init;