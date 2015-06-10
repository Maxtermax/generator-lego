'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
	function ROUTE_HOLA() {
		_classCallCheck(this, ROUTE_HOLA);
	}

	_createClass(ROUTE_HOLA, [{
		key: 'GET_Hola',
		//end constructor
		value: function GET_Hola(req, res) {
			res.send('Allo!!');
		} //end hola GET

	}]);

	return ROUTE_HOLA;
})(); //end class Route_hola