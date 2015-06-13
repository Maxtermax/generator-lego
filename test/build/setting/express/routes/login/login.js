'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
	function ROUTE_LOGIN() {
		_classCallCheck(this, ROUTE_LOGIN);
	}

	_createClass(ROUTE_LOGIN, [{
		key: 'GET_Login',
		//end constructor
		value: function GET_Login(req, res) {
			res.send('Allo!!');
		} //end login GET

	}]);

	return ROUTE_LOGIN;
})(); //end class Route_login