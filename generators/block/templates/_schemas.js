module.exports = function (Schema) {
	var ListSchemas = {
		//ListSchemas
		Cat:new Schema({
			name:{type:String,required:true},
			age:{type:Number,required:true}//last field 
		})//end Cat

	}//List of schemas 
	return ListSchemas
}//end schemas