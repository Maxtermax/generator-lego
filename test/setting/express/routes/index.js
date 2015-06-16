var roots = function (app) {
	//begin route test		
	var test = require('./test/test.js')(app)
	var instance_test = new test()
	app
		.route('/test')
		.get(instance_test['GET_Test']) 
	//end route test		


	//begin route dos
	var dos = require('./dos/dos.js')(app)
	var instance_dos = new dos()
	app
		.route('/dos')
		.get(instance_dos['GET_Dos'])
	//end route dos

}//end routes 


module.exports = roots


































