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
    jwt = require('jsonwebtoken') //jwt
,
    expressJwt = require('express-jwt') //express
,
    app = express() //express call as funciton
,
    server = http.createServer(app); //server http

//begin set port,log
app.set('port', process.env.PORT || 3000).set('status log', app.get('port') === 3000 ? 'dev' : 'combined');
//end set port log

//begin setting
/*
	/////////////////////////////
		EXPRESS CONFIGURATIONS
	/////////////////////////////

	Buid you setting stack with this commands:
		yo lego:express set 
*/

app.use(require('cors')()) //middlewares acess among server's https://www.npmjs.com/package/cors
.use(require('morgan')(app.get('status log'))) //middleware debug https://www.npmjs.com/package/morgan
.use(require('method-override')()) //middleware put and delete request https://www.npmjs.com/package/method-override
.use(require('multer')()) //middleware parse files and post request https://www.npmjs.com/package/multer
.use('/haki', expressJwt({ secret: 'Lolipop', exp: 5 }), function (err, req, res, next) {
	if (err) return res.send(err).status(err.status);
	next();
}) //auth for /haki

.use('/privado', expressJwt({ secret: 'Lolipop', exp: 5 }), function (err, req, res, next) {
	if (err) return res.send(err).status(err.status);
	next();
}); //auth for /privado
//end setting

//begin route /privado
app.route('/privado').get(function (req, res) {
	res.send('welcome to: /privado :)');
});
//end route /privado

//begin route /haki
app.route('/haki').get(function (req, res) {
	res.send('welcome to: /haki :)');
});
//end route /haki

//begin route /edd
app.route('/edd').get(function (req, res) {
	res.send('welcome to: /edd :)');
});
//end route /edd

//begin route /ef
app.route('/ef').get(function (req, res) {
	res.send('welcome to: /ef :)');
});
//end route /ef

//begin route /testss
app.route('/testss').get(function (req, res) {
	res.send('welcome to: /testss :)');
});
//end route /testss

//begin route /tests
app.route('/tests').get(function (req, res) {
	res.send('welcome to: /tests :)');
});
//end route /tests

//begin route /test
app.route('/test').get(function (req, res) {
	res.send('welcome to: /test :)');
});
//end route /test

//begin route /pawcf
app.route('/pawcf').get(function (req, res) {
	res.send('welcome to: /pawcf :)');
});
//end route /pawcf

//begin route /pawc
app.route('/pawc').get(function (req, res) {
	res.send('welcome to: /pawc :)');
});
//end route /pawc

//begin route /paw
app.route('/paw').get(function (req, res) {
	res.send('welcome to: /paw :)');
});
//end route /paw

server.listen(app.get('port'), function () {
	return console.log('Listen on port', app.get('port'));
});

//end express