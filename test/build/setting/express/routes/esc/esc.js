'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
	function ROUTE_ESC() {
		_classCallCheck(this, ROUTE_ESC);
	}

	_createClass(ROUTE_ESC, [{
		key: 'GET_Esc',
		//end constructor
		value: function GET_Esc(req, res) {
			res.send('Allo!! NO SE fre');
		} //end esc GET

	}]);

	return ROUTE_ESC;
})(); //end class Route_esc