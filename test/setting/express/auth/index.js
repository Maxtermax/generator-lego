const jwt = require('jsonwebtoken')
, 		expressJwt = require('express-jwt');

module.exports = class Auth {
	constructor(app) {
		this.key = `
			you must set a private key,
		 	for this for please do it with open ssl or other implentation for have sure you sistem please see: https://github.com/auth0/express-jwt`
		this.jwt = expressJwt({secret:this.key,exp:this.minutes})
		this.app = app
		this.minutes = 5 
	}//end constructor 

	genToken(data) { 
		return jwt.sign(data,this.key,{expiresInMinutes:this.minutes });
	}//end generate token 

	verifyToken(err,req,res,next) {
		let method = req.method
		if(!err) return next()//request OK
		if(method != 'GET') return res.send(err).status(err.status)//send JSON error
		//send html error
		res.send(`
     do not have authorized for access this route make sure to set 
      the token authorization in the header of request please see
      <a href="https://github.com/auth0/node-jsonwebtoken" target="_blank" >Jwt</a> 
   `).status(err.status)
	
	}//end veryfy token

}//end class auth 