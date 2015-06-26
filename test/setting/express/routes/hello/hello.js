module.exports = function(app) {
	return	class ROUTE_HELLO {
		constructor(path) {
			//begin route
				app
					.route(path)
					.get(this['Hello::GET'])
					.post(this['Hello::POST'])
			//end route
		}//end router constructor

		'Hello::POST'(req,res){
			res.send( 'Allo!! wellcome to /hello for method POST')
		}//end hello POST
 
		'Hello::GET'(req,res) {
			res.send('Allo!!')
		}//end hello GET


	}//end class Route_hello 
}//end exports 	