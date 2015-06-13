'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var jwt = require('jsonwebtoken'),
    expressJwt = require('express-jwt'),
    key = 'llave hay que generar la';

module.exports = (function () {
	function Auth(app) {
		_classCallCheck(this, Auth);

		this.app = app;
		this.jwt = expressJwt({ secret: key, exp: 5 });
	}

	_createClass(Auth, [{
		key: 'genToken',
		value: function genToken(data, key, time) {
			return jwt.sign(data, key, { expiresInMinutes: time });
		}
	}, {
		key: 'verifyToken',
		//end generate token

		value: function verifyToken(err, req, res, next) {
			if (err) return res.send(err.name).status(err.status);
		} //end veryfy token

	}]);

	return Auth;
})(); //end class auth