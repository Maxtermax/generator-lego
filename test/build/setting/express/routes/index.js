'use strict';

var roots = function roots(app) {
	//begin route login		
	var login = require('./login/login.js');
	var instance_login = new login({ app: app });
	app.route('/login').get(instance_login['GET_Login']);
	//end route login		

	//begin route admin_name
	var admin_name = require('./admin_name/admin_name.js');
	var instance_admin_name = new admin_name({ app: app });
	app.route('/admin/:name').get(instance_admin_name['GET_Admin_name']);
}; //end routes

module.exports = roots;
//end route admin_name