"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = (function () {
	//begin constructor 	

	function SALUDA(data) {
		_classCallCheck(this, SALUDA);

		this.app = data.app;
	}

	_createClass(SALUDA, [{
		key: "saluda",

		//end constructor
		value: (function (_saluda) {
			function saluda(_x, _x2) {
				return _saluda.apply(this, arguments);
			}

			saluda.toString = function () {
				return _saluda.toString();
			};

			return saluda;
		})(function (req, res) {
			res.send("Allo " + saluda);
		} //end saluda	

		)
	}]);

	return SALUDA;
})(); //end class routes
