module.exports = function (Schema,name) {
	//begin statics method

	Schema.statics.create = function() {
		var model = this.model(name)	
		//do statements					
	}//end create

	//end statics method

}//end exports