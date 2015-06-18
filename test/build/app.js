'use strict';

var http = require('http');

/*
	Main controller 
		start puting you blocks with subgenerator like lego pieces: 
		subgenerator available:
*/

//begin express
'use strict';

var express = require('express') //express
,
    app = express() //call express like function
,
    server = http.createServer(app) //server http
,
    mongoose = require('mongoose') //mongodb driver
,
    Schema = mongoose.Schema; //db schemas

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
.use(require('multer')()); //middleware parse files and post request https://www.npmjs.com/package/multer

//end setting

var database = 'putas',
    dbuser = 'test',
    dbpassword = 'maxtermax02',
    port = '22324'; //end setting uri

app.set('uri', app.get('status log') === 'dev' ? 'mongodb://localhost/' + database : 'mongodb://' + dbuser + ':' + dbpassword + '@ds0' + port + '.mongolab.com:' + port + '/' + database); //set uri
mongoose.connect(app.get('uri'), function (err) {
	if (err) return console.log(err);console.log('OK');
}); //open connection
//ListSchemas

var Cat = new Schema({
	name: { type: String, required: true, unique: false },
	age: { type: Number, required: true, unique: false } //last field
}); //end Cat

//begin statics method
Cat.statics.uno = function (res) {
	var model = this.model('TEST');
	model.find({}, function (err, docs) {
		return err ? res.send(err) : res.send(docs);
	});
}; //end uno

Cat.statics.dos = function () {
	var model = this.model('TEST')
	//do statements
	;
}; //end dos

Cat.statics.tre = function () {
	var model = this.model('TEST')
	//do statements
	;
}; //end tre

//end statics method

app.set('model', mongoose.model('TEST', Cat)); //end model

var modelo = app.get('model');

//begin route /test
app.route('/test').get(function (req, res) {
	modelo.uno(res);
});
//end route /test

server.listen(app.get('port'), function () {
	return console.log('Listen on port', app.get('port'));
});

//end express
//do statements