var roots = function (app) {
	//begin route ginary		
	var ginary = require('./ginary/ginary.js')
	var instance_ginary = new ginary({app:app})
	app
		.route('/ginary')
		.get(instance_ginary['GET_Ginary'] ) 
		.put(instance_ginary['PUT_Ginary'])
	//end route ginary
		

}//end routes 


module.exports = roots


































