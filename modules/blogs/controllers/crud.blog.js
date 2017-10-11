const path = require('path');

//@ demo methods for future use
module.exports = {

	create: (req, res) => {
		res.json({status: "blog created"});	
	},

	read: (req, res, next) => {
		next('hello')
		res.json({status: "blog content"});	
	},

	update: (req, res) => {
		res.json({status: "blog updated"});	
	},

	delete: (req, res) => {
		res.json({status: "blog deleted"});	
	}

}
