'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
	function ROUTE_LIST__X__Z() {
		_classCallCheck(this, ROUTE_LIST__X__Z);
	}

	_createClass(ROUTE_LIST__X__Z, [{
		key: 'GET_List__x__z',
		//end constructor
		value: function GET_List__x__z(req, res) {
			res.send('Allo!!' + req.x + req.z);
		} //end list__x__z GET

	}]);

	return ROUTE_LIST__X__Z;
})(); //end class Route_list__x__z