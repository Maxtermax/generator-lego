
module.exports = function (app) {
	//begin routes required
	var <%= name %> = require('./<%= name %>/<%= name %>.js')(app)//class for <%= name %>
	//end routes required

	return {
		instance_<%= name %> : new <%= name %>('<%= path %>')//last instance 
	}//return instances of routes 

}//end routes 