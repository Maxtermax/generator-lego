module.exports = function (Schema,name) {
	//begin statics method

	Schema.statics.<%= name %> = function() {
		var model = this.model(name)	
		//do statements					
	}//end <%= name %>

	//end statics method

}//end exports