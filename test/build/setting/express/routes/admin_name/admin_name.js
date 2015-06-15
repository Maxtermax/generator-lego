'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
	function ROUTE_ADMIN_NAME() {
		_classCallCheck(this, ROUTE_ADMIN_NAME);
	}

	_createClass(ROUTE_ADMIN_NAME, [{
		key: 'GET_Admin_name',
		//end constructor
		value: function GET_Admin_name(req, res) {
			res.send('Allo!!');
		} //end admin_name GET

	}]);

	return ROUTE_ADMIN_NAME;
})(); //end class Route_admin_name