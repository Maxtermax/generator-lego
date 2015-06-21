module.exports = function (Schema) {
		//begin ListSchemas
		var Dog = new Schema({ 
			name:{type:String,required:true,unique:false},
			age:{ type:Number,required:true,unique:false}//last field
		})//end Dog
		
		var Cat = new Schema({
			name:{type:String,required:true},
			age:{type:Number,required:true},
			Dog:[Dog]//last field 
		})//end Cat
		
	return Cat
}//end schemas