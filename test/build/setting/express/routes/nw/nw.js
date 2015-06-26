'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = function (app) {
	return (function () {
		function ROUTE_NW(path) {
			_classCallCheck(this, ROUTE_NW);

			//begin route
			app.route(path).get(this['Nw::GET']).get(this['Nw::GET']);
		}

		_createClass(ROUTE_NW, [{
			key: 'Nw::GET',
			//end router constructor

			value: function NwGET(req, res) {
				res.send('Allo!! wellcome to /nw for method GET');
			}
		}, {
			key: 'Nw::GET',
			//end nw GET

			value: function NwGET(req, res) {
				res.send('Allo!!');
			} //end nw GET

		}]);

		return ROUTE_NW;
	})();
} //end exports 	
; //end route
//end class Route_nw