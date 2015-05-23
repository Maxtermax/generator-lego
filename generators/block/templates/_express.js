"use strict";

const express = require('express')
,		app = express()
,		server = http.createServer(app)
,		port = process.env.PORT ? process.env.PORT : 3000;
app.env = (port === 3000) ?'dev':'combined';

//begin setting
//end setting

server.listen(port,() => console.log('Listen on port',port) );
