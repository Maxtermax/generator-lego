"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = (function () {
	function ROUTE_INIT_END() {
		_classCallCheck(this, ROUTE_INIT_END);
	}

	_createClass(ROUTE_INIT_END, [{
		key: "GET_Init_end",
		//end constructor
		value: function GET_Init_end(req, res) {
			res.send("" + req.init + " " + req.end);
		} //end init_end GET

	}]);

	return ROUTE_INIT_END;
})(); //end class Route_init_end