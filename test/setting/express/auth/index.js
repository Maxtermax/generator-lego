var jwt = require('jsonwebtoken')
, expressJwt = require('express-jwt')
,	key = 'llave hay que generar la';

module.exports = class Auth {
	constructor(app) {
		this.app = app
		this.jwt = expressJwt({secret:key,exp:5})
	}
	genToken(data,key,time) { 
		return jwt.sign(data,key,{expiresInMinutes:time});
	}//end generate token 

	verifyToken(err,req,res,next) {
		if(err) return res.send(err.name).status(err.status)
	}//end veryfy token

}//end class auth 































