var roots = function (app) {
	//begin route hola		
	var hola = require('./hola/hola.js')
	var instance_hola = new hola({app:app})
	app
		.route('/hola')
		.get(instance_hola['GET_Hola']) 
	//end route hola		


	//begin route real
	var real = require('./real/real.js')
	var instance_real = new real({app:app})
	app
		.route('/real')
		.get(instance_real['GET_Real'])
	//end route real


	//begin route time
	var time = require('./time/time.js')
	var instance_time = new time({app:app})
	app
		.route('/time')
		.get(instance_time['GET_Time'])
	//end route time


	//begin route nuevo
	var nuevo = require('./nuevo/nuevo.js')
	var instance_nuevo = new nuevo({app:app})
	app
		.route('/nuevo')
		.get(instance_nuevo['GET_Nuevo'])
	//end route nuevo


	//begin route ng
	var ng = require('./ng/ng.js')
	var instance_ng = new ng({app:app})
	app
		.route('/ng')
		.get(instance_ng['GET_Ng'])
	//end route ng


	//begin route esc
	var esc = require('./esc/esc.js')
	var instance_esc = new esc({app:app})
	app
		.route('/esc')
		.get(instance_esc['GET_Esc'])
	//end route esc


	//begin route ccc
	var ccc = require('./ccc/ccc.js')
	var instance_ccc = new ccc({app:app})
	app
		.route('/ccc')
		.get(instance_ccc['GET_Ccc'])
	//end route ccc

}//end routes 


module.exports = roots


































