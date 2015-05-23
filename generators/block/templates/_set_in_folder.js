"use strict";
/*
	/////////////////////////////
		EXPRESS CONFIGURATIONS
	/////////////////////////////

	Buid you setting stack with this commands:
		yo lego:express set 
*/

module.exports = function (app) {
	//begin setting
	app
		.use(require('cors')())//middlewares acess among server's 
		.use(require('morgan')( app.env ))//middleware debug
		.use(require('method-override')())//middleware put and delete request
	//end setting
}