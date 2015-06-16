var roots = function (app) {
	//begin route <%= name %>		
	var <%= name %> = require('./<%= name %>/<%= name %>.js')(app)
	var instance_<%= name %> = new <%= name %>()
	app
		.route('<%= path %>')
		.<%= method %>(instance_<%= name %>['<%= methodMay %>_<%= nameCap %>']) 
	//end route <%= name %>		

}//end routes 


module.exports = roots


































