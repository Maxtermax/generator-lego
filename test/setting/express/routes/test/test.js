module.exports = function(app) {
	return	class ROUTE_TEST {
		constructor(path) {
			//begin route
				app
					.route(path)
					.get(this['Hello::GET'])
			//end route
		}//end router constructor 

		'Hello::GET'(req,res) {
			res.send('Allo!!')
		}//end test GET


	}//end class Route_test 
}//end exports 	