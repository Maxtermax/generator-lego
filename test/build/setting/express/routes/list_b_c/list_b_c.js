'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
	function ROUTE_LIST_B_C() {
		_classCallCheck(this, ROUTE_LIST_B_C);
	}

	_createClass(ROUTE_LIST_B_C, [{
		key: 'GET_List_b_c',
		//end constructor
		value: function GET_List_b_c(req, res) {
			res.send('Allo!!');
		} //end list_b_c GET

	}]);

	return ROUTE_LIST_B_C;
})(); //end class Route_list_b_c