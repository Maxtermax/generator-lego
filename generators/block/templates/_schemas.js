module.exports = function (Schema) {
		//begin ListSchemas
		var Cat = new Schema({
			name:{type:String,required:true},
			age:{type:Number,required:true}//last field 
		})//end Cat
		//end ListSchemas

	return Cat
}//end schemas