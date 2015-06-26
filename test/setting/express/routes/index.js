
module.exports = function (app) {
	//begin routes required
	var test = require('./test/test.js')(app)//class for test
	, hello = require('./hello/hello.js')(app)//class for hello
//end routes required

	return {
		instance_test : new test('/test'),
		instance_hello : new hello('/hello')//last instance 
	}//return instances of routes 

}//end routes 