'use strict';
/*
	/////////////////////////////
		EXPRESS CONFIGURATIONS
	/////////////////////////////

	Buid you setting stack with this commands:
		yo lego:express set 
*/
module.exports = function (express, app) {
	var Auth = require('./auth'); //auth handler
	var auth = new Auth(app); //instance auth class
	//begin setting
	app.use(require('cors')()) //middlewares acess among server's https://www.npmjs.com/package/cors
	.use(require('morgan')(app.get('status log'))) //middleware debug https://www.npmjs.com/package/morgan
	.use(require('method-override')()) //middleware put and delete request https://www.npmjs.com/package/method-override
	.use(require('multer')()) //middleware parse files and post request https://www.npmjs.com/package/multer
	.use('/login', auth.jwt, auth.verifyToken);
};
//.use( '/nuevo', auth.verifyToken)
//end setting