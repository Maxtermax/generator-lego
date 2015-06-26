module.exports = function(app) {
	return	class ROUTE_TEST {
		constructor(path) {
			//begin route
				app
					.route(path)
					.get(this['Test::GET'])
			//end route
		}//end router constructor 

		'Test::GET'(req,res) {
			res.send('Allo!!')
		}//end test GET


	}//end class Route_test 
}//end exports 	