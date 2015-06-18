module.exports = function (Schema) {
		//ListSchemas
		var Cat = new Schema({
			name:{type:String,required:true},
			age:{type:Number,required:true}//last field 
		})//end Cat
		
	return Cat
}//end schemas