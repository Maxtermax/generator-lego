'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
	function ROUTE_NUEVOGR() {
		_classCallCheck(this, ROUTE_NUEVOGR);
	}

	_createClass(ROUTE_NUEVOGR, [{
		key: 'GET_Nuevogr',
		//end constructor
		value: function GET_Nuevogr(req, res) {
			res.send('Allo!!');
		} //end nuevogr GET

	}]);

	return ROUTE_NUEVOGR;
})(); //end class Route_nuevogr