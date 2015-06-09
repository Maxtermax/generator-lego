"use strict";
/*
	/////////////////////////////
		EXPRESS CONFIGURATIONS
	/////////////////////////////

	Buid you setting stack with this commands:
		yo lego:express set 
*/

module.exports = function (express,app) {
	//begin setting
	app
		.use(require('cors')())//middlewares acess among server's https://www.npmjs.com/package/cors 
		.use(require('morgan')( app.get('status log') ))//middleware debug https://www.npmjs.com/package/morgan
		.use(require('method-override')())//middleware put and delete request https://www.npmjs.com/package/method-override
		.use(require('multer')())//middleware parse files and post request https://www.npmjs.com/package/multer
		.set('views',__dirname+'/../app/views')
		.use(express.static(__dirname+'/../../app'))//statics resources
		.use(express.static(__dirname+'/../../app/views'))//statics resources
		.use(express.static(__dirname+'/../../app/styles'))//statics resources
		.use(express.static(__dirname+'/../../app/scripts'))//statics resources

 		.use(express.static(__dirname+'/../app/n'))//statics resources
 		//.param('nuevo', (req,res,next,nuevo)=> { req.nuevo = 'nuevo'; next(); })//nuevo param
 		.set('view engine','jade' )//engine view
 //end setting
}