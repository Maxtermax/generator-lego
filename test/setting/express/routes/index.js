var roots = function (app) {

	//begin route x_y
	var x_y = require('./x_y/x_y.js')
	var instance_x_y = new x_y({app:app})
	app
		.route('/:x/:y')
		.get(instance_x_y['GET_X_y'])
	//end route x_y


	//begin route init_end
	var init_end = require('./init_end/init_end.js')
	var instance_init_end = new init_end({app:app})
	app
		.route('/test/:init/:end')
		.get(instance_init_end['GET_Init_end'])
	//end route init_end

}//end routes 


module.exports = roots


































