var assert = require('assert'),
	List = require('./list');
	mongoose = require('mongoose');

/**
 * Wrap Class
 *
 * @param {String} key
 * @param {Object} schema
 * @api public
 */
var Wrap = function(key, schema) {
	assert.ok(typeof key === 'string' && schema instanceof mongoose.Schema, 
		'arguments for list are invalid.');

	this.model = null;
	this.key = key;
	this.schema = schema;

	// add to a list
	List.set(key, this);
};

Wrap.prototype.register = function() {
	this.model = mongoose.model(this.key, this.schema);
	return this;
};

module.exports = Wrap;
