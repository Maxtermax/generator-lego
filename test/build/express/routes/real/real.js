'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
	function ROUTE_REAL() {
		_classCallCheck(this, ROUTE_REAL);
	}

	_createClass(ROUTE_REAL, [{
		key: 'GET_Real',
		//end constructor
		value: function GET_Real(req, res) {
			res.send('Allo!! real');
		} //end real GET

	}]);

	return ROUTE_REAL;
})(); //end class Route_real