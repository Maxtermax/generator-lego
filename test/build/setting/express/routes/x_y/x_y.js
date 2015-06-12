"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = (function () {
	function ROUTE_X_Y() {
		_classCallCheck(this, ROUTE_X_Y);
	}

	_createClass(ROUTE_X_Y, [{
		key: "GET_X_y",
		//end constructor
		value: function GET_X_y(req, res) {

			res.send(" x = " + req.x + " , y = " + req.y + " ");
		} //end x_y GET

	}]);

	return ROUTE_X_Y;
})(); //end class Route_x_y