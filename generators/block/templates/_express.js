"use strict";

const express = require('express')//express
,		app = express()//call express like function 
,		server = http.createServer(app)//server http 

//begin set port,log
app
	.set('port', process.env.PORT || 3000)
	.set('status log', app.get('port') === 3000 ? 'dev':'combined' ) 
//end set port log


//begin setting
//end setting

server.listen(app.get("port"),() => console.log('Listen on port',app.get("port")) );
