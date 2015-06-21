var roots = function (app) {
	//begin route hello		
	var hello = require('./hello/hello.js')(app)
	var instance_hello = new hello()
	app
		.route('/hello')
		.get(instance_hello['GET_Hello']) 
		.post(instance_hello['POST_Hello'])
	//end route hello
		


	//begin route username
	var username = require('./username/username.js')(app)
	var instance_username = new username()
	app
		.route('/user/:name')
		.get(instance_username['GET_Username'])
	//end route username

}//end routes 


module.exports = roots


































