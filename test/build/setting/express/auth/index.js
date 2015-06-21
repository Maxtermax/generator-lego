'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var jwt = require('jsonwebtoken'),
    expressJwt = require('express-jwt');

module.exports = (function () {
	function Auth(app) {
		_classCallCheck(this, Auth);

		this.key = '\n\t\t\tyou must set a private key,\n\t\t \tfor this for please do it with open ssl or other implentation for have sure you sistem please see: https://github.com/auth0/express-jwt';
		this.jwt = expressJwt({ secret: this.key, exp: this.minutes });
		this.app = app;
		this.minutes = 5;
	}

	_createClass(Auth, [{
		key: 'genToken',
		//end constructor

		value: function genToken(data) {
			return jwt.sign(data, this.key, { expiresInMinutes: this.minutes });
		}
	}, {
		key: 'verifyToken',
		//end generate token

		value: function verifyToken(err, req, res, next) {
			var method = req.method;
			if (!err) return next(); //request OK
			if (method != 'GET') return res.send(err).status(err.status); //send JSON error
			//send html error
			res.send('\n     do not have authorized for access this route make sure to set \n      the token authorization in the header of request please see\n      <a href="https://github.com/auth0/node-jsonwebtoken" target="_blank" >Jwt</a> \n   ').status(err.status);
		} //end verify token

	}]);

	return Auth;
})(); //end class auth