'use strict';

module.exports = function (app) {
	//begin routes required
	var test = require('./test/test.js')(app); //class for test
	//end routes required

	return {
		instance_test: new test('/test') //last instance
	} //return instances of routes

	;
} //end routes
;