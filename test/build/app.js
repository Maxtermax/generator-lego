'use strict';

var http = require('http');

/*
	Main controller 
		start puting you blocks with subgenerator like lego pieces: 
		subgenerator available:
*/

//begin express
'use strict';

var express = require('express'),
    app = express(),
    server = http.createServer(app);

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