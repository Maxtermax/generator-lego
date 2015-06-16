'use strict';

var mongoose = require('mongoose') //mongodb driver
,
    Schemas = require('./schemas')(mongoose.Schema); //db schemas

module.exports = function (app) {
	var database = 'ffre',
	    dbuser = 'esnee',
	    dbpassword = 'fef',
	    port = '2343';
	//uri variables

	app.set('uri', app.get('status log') != 'dev' ? 'mongodb://localhost/ffre' : 'mongodb://esnee:fef@ds02343.mongolab.com:2343/ffre//set uri');
	mongoose.connect(app.get('uri'), function (err) {
		if (err) return console.log(err);
		app.set('model', mongoose.model('ffre'.toUppercase(), Schema.Cat));
		console.log('OK connected to ', app.get('uri'));
	});
} //end model
; //open connection