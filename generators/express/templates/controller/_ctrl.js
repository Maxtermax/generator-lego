module.exports = function(app) {
	return	class ROUTE_<%= title %> {
		<%= method %>_<%= nameCap %>(req,res) {
			res.send('Allo!!')
		}//end <%= name %> <%= method %>

	}//end class Route_<%= name %> 

}//end exports 	