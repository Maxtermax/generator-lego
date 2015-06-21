"use strict";
/*
	Main controller 
		start puting you blocks with subgenerator like lego pieces: 
		subgenerator available:

		yo stack-lego:block express  
		yo stack-lego:express set param
		yo stack-lego:express set static 
		yo stack-lego:express set engine 
		yo stack-lego:express set views
		yo stack-lego:express route GET /hello
		yo stack-lego:express route GET /hello Auth
		
		yo stack-lego:block mongodb
		yo stack-lego:mongodb schema new <someName>
		yo stack-lego:mongodb schema add <existing schema>
		yo stack-lego:mongodb schema extend <schema to extend> <schema base>
		yo stack-lego:mongodb schema statics <name of static method> <existing model> <existing schema>

*/

//begin express 
const express = require('express')//express
,		app = express()//call express like function 
,		server = require('http').createServer(app)//server http 

//begin set port,log
app
	.set('port', process.env.PORT || 3000)
	.set('status log', app.get('port') === 3000 ? 'dev':'combined' ) 
//end set port log

//begin setting 
 require('./setting/express')(express,app)
//end setting

//begin model
require('./setting/model')(app)
//end model

//begin routes
require('./setting/express/routes')(app)
//end routes

server.listen(app.get("port"),() => console.log('Listen on port',app.get("port")) );
//end express