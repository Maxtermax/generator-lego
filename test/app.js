var http = require('http')

/*
	Main controller 
		start puting you blocks with subgenerator like lego pieces: 
		subgenerator available:
*/

//begin express 
"use strict";

const express = require('express')
,		app = express()
,		server = http.createServer(app)

//begin set port,log
app
	.set('port', process.env.PORT || 3000)
	.set('status log', app.get('port') === 3000 ? 'dev':'combined' ) 
//end set port log


//begin setting 
 require('./setting/express')(express,app)
//end setting

//begin route /saluda
 var sal = new require('./routes/saluda')({app:app})
 app
	.route('/saluda')
	.get(sal.saluda)
	
//end route /saluda 


 

app
	.route('/few')
	.get(function(req,res) { 
 		res.send('welcome to: /few :)')
	})
//end route /few 

server.listen(app.get("port"),() => console.log('Listen on port',app.get("port")) );

//end express





















