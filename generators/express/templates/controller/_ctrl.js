module.exports = function(app) {
	return	class ROUTE_<%= title %> {
		constructor(path) {
			//begin route
				app
					.route(path)
					.<%= methodLower %>(this['<%= nameCap %>::<%= method %>'])
			//end route
		}//end router constructor 

		'<%= nameCap %>::<%= method %>'(req,res) {
			res.send('Allo!!')
		}//end <%= name %> <%= method %>


	}//end class Route_<%= name %> 
}//end exports 	