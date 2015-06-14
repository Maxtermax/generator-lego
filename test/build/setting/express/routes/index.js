'use strict';

var roots = function roots(app) {
	//begin route hola		
	var hola = require('./hola/hola.js');
	var instance_hola = new hola({ app: app });
	app.route('/hola').get(instance_hola['GET_Hola']);
	//end route hola		

	//begin route login
	var login = require('./login/login.js');
	var instance_login = new login({ app: app });
	app.route('/login').get(instance_login['GET_Login']);
	//end route login

	//begin route sign
	var sign = require('./sign/sign.js');
	var instance_sign = new sign({ app: app });
	app.route('/sign').get(instance_sign['GET_Sign']);
	//end route sign

	//begin route nuevo
	var nuevo = require('./nuevo/nuevo.js');
	var instance_nuevo = new nuevo({ app: app });
	app.route('/nuevo').get(instance_nuevo['GET_Nuevo']);
	//end route nuevo

	//begin route nuevas
	var nuevas = require('./nuevas/nuevas.js');
	var instance_nuevas = new nuevas({ app: app });
	app.route('/nuevas').get(instance_nuevas['GET_Nuevas']);
	//end route nuevas

	//begin route money
	var money = require('./money/money.js');
	var instance_money = new money({ app: app });
	app.route('/money').get(instance_money['GET_Money']);
}; //end routes

module.exports = roots;
//end route money