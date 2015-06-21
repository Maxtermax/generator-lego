module.exports = function(app) {
	return	class ROUTE_HELLO {
		constructor() {
		
		}//end constructor

		POST_Hello(req,res){
			res.send( 'Allo!! wellcome to /hello for method POST')
		}//end hello POST


		GET_Hello(req,res) {
			res.send('Allo!!')
		}//end hello GET

	}//end class Route_hello 

}//end exports 	