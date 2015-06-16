"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (app) {
	return (function () {
		function ROUTE_TEST() {
			_classCallCheck(this, ROUTE_TEST);
		}

		_createClass(ROUTE_TEST, [{
			key: "GET_Test",
			value: function GET_Test(req, res) {} //end test GET

		}]);

		return ROUTE_TEST;
	})();
} //end exports 	
;
/*
var db = app.get("db")
db.find({},(err,docs)=>(err)?res.send(err):res.send(docs) )
*/
//end class Route_test