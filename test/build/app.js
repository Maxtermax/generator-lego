'use strict';
/*
	Main controller 
		start puting you blocks with subgenerator like lego pieces: 
		subgenerator available:

		yo lego:block express  
		yo lego:express set param
		yo lego:express set static 
		yo lego:express set engine 
		yo lego:express set views
		yo lego:express route GET /hello
		yo lego:express route GET /hello Auth
		
		yo lego:block mongodb
		yo lego:mongodb schema new <someName>
		yo lego:mongodb schema add <existing schema>
		yo lego:mongodb schema extend <schema to extend> <schema base>
		yo lego:mongodb schema statics <name of static method> <existing model> <existing schema>

*/

//begin express
var express = require('express') //express
,
    app = express() //call express like function
,
    server = require('http').createServer(app); //server http

//begin set port,log
app.set('port', process.env.PORT || 3000).set('status log', app.get('port') === 3000 ? 'dev' : 'combined');
//end set port log

//begin setting
require('./setting/express')(express, app);
//end setting

//begin routes
require('./setting/express/routes')(app);
//end routes

server.listen(app.get('port'), function () {
	return console.log('Listen on port', app.get('port'));
});
//end express