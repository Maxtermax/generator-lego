var mongoose = require('mongoose')//mongodb driver
,		Schemas = require("./schemas")(mongoose.Schema)//db schemas
,   statics = require('./statics')(Schemas,'GITHUB_DB')//end statics schemas 

module.exports = function(app) {
	let database = 'github_db'
	,		dbuser = 'actocat'
	,		dbpassword = 'octocat123'
	,		port = '43562'
	//uri variables
 	
	app.set('uri', app.get('status log') === 'dev' ? `mongodb://localhost/github_db` : `mongodb://actocat:octocat123@ds043562.mongolab.com:43562/github_db//set uri`)

	mongoose.connect( app.get('uri') ,(err)=> { 
		if(err) return console.log(err); 
		app.set('model',mongoose.model( 'github_db'.toUpperCase() , Schemas))
		console.log('OK connected to ',app.get('uri'))
	})//open connection 

}//end model 