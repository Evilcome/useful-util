var importer = require('./importer');

var List = {
	
	// model wraps list 
	wraps: {},

	load: function() {
		importer(__dirname)('../models');
	},

	set: function(key, wrap) {
		this.wraps[key] = wrap;
	},

	get: function(key) {
		return this.wraps[key];
	},

	getModel: function(key) {
		if (this.wraps[key]) {
			return this.wraps[key].model;
		}

		return null;
	}
};

module.exports = List;