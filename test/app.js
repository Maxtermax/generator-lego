"use strict";
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
		yo lego:mongodb schema extend <existing to schema>
		yo lego:mongodb schema statics <name of static method> <existing model> <existing schema>

*/

//begin express 
const express = require('express')
,   jwt = require('jsonwebtoken')//jwt
,    expressJwt = require('express-jwt')//express
,	 app = express()//call express like function 
,	 server = require('http').createServer(app)//server http
,  mongoose = require('mongoose')//mongodb driver
,  Schema = mongoose.Schema//db schemas
,  database = 'fre'
,  dbuser = 'es'
,  dbpassword = 'fe'
,  port = '23543'//uri variables

//begin ListSchemas

var Cat = new Schema({
	name:{type:String,required:true,unique:false},
	age:{type:Number,required:true,unique:false}//last field
})//end Cat

//end ListSchemas 

//begin set port,log
app
	.set('port', process.env.PORT || 3000)
	.set('status log', app.get('port') === 3000 ? 'dev':'combined' ) 
//end set port log

//begin setting 
/*
	/////////////////////////////
		EXPRESS CONFIGURATIONS
	/////////////////////////////

	Buid you setting stack with this commands:
		yo lego:express set 
*/

app
	.use(require('cors')())//middlewares acess among server's https://www.npmjs.com/package/cors 
	.use(require('morgan')( app.get('status log') ))//middleware debug https://www.npmjs.com/package/morgan
	.use(require('method-override')())//middleware put and delete request https://www.npmjs.com/package/method-override
	.use(require('multer')())//middleware parse files and post request https://www.npmjs.com/package/multer
	.set('uri', app.get('status log') === 'dev' ? `mongodb://localhost/${database}` : `mongodb://${dbuser}:${dbpassword}@ds0${port}.mongolab.com:${port}/${database}`)//set uri
	.set('model',mongoose.model('ES',Cat))//end model
	.use('/hola',expressJwt({secret:'Lolipop',exp:5}) ,(err,req,res,next)=> {
		if(err) return res.send(err).status(err.status)
		next()
	})//auth for /hola
//end setting

//begin route /hola
app
	.route('/hola')
	.get(function(req,res) { 
 		res.send('welcome to: /hola :)')
	})
//end route /hola 

mongoose.connect( app.get('uri') ,(err)=> { if(err) return console.log(err); console.log('OK connected to '+app.get('uri')) })//open connection

server.listen(app.get("port"),() => console.log('Listen on port',app.get("port")) );
//end express