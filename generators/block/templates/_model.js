var mongoose = require('mongoose')//mongodb driver
,		Schemas = require("./schemas")(mongoose.Schema)//db schemas 

module.exports = function(app) {
	let database = '<%= database %>'
	,		dbuser = '<%= dbuser %>'
	,		dbpassword = '<%= dbpassword %>'
	,		port = '<%= port %>'
	//uri variables
 	
	app.set('uri', app.get('status log') != 'dev' ? `mongodb://localhost/${database}` : `mongodb://${dbuser}:${dbpassword}@ds0${port}.mongolab.com:${port}/${database}//set uri`)
	mongoose.connect( app.get('uri') ,(err)=> { 
		if(err) return console.log(err); 
		app.set('model',mongoose.model( '<%= database %>'.toUppercase() , Schema.Cat))
		console.log('OK connected to ',app.get('uri'))
	})//open connection 

}//end model 