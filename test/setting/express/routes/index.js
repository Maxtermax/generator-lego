var roots = function (app) {
	//begin route hello		
	var hello = require('./hello/hello.js')(app)
	var instance_hello = new hello()
	app
		.route('/hello')
		.get(instance_hello['GET_Hello']) 
		.post(instance_hello['POST_Hello'])
	//end route hello
		

}//end routes 


module.exports = roots


































