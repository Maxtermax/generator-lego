'use strict';

var roots = function roots(app) {
	//begin route hola		
	var hola = require('./hola/hola.js');
	var instance_hola = new hola({ app: app });
	app.route('/hola').get(instance_hola['GET_Hola']);
	//end route hola		

	//begin route real
	var real = require('./real/real.js');
	var instance_real = new real({ app: app });
	app.route('/real').get(instance_real['GET_Real']);
	//end route real

	//begin route time
	var time = require('./time/time.js');
	var instance_time = new time({ app: app });
	app.route('/time').get(instance_time['GET_Time']);
}; //end routes

module.exports = roots;
//end route time