'use strict';

var roots = function roots(app) {
	//begin route login		
	var login = require('./login/login.js');
	var instance_login = new login({ app: app });
	app.route('/login').get(instance_login['GET_Login']);
	//end route login		

	//begin route nuevo
	var nuevo = require('./nuevo/nuevo.js');
	var instance_nuevo = new nuevo({ app: app });
	app.route('/nuevo').get(instance_nuevo['GET_Nuevo']);
	//end route nuevo

	//begin route libre
	var libre = require('./libre/libre.js');
	var instance_libre = new libre({ app: app });
	app.route('/libre').get(instance_libre['GET_Libre']);
}; //end routes

module.exports = roots;
//end route libre