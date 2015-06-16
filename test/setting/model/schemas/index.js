module.exports = function (Schema) {
	 
	var ListSchemas = {
		//ListSchemas
		ffff:new Schema({ 
			ffff:{type:String,required:true,unique:false},
			fff_extend:ListSchemas.fre//last field
		}),//end ffff
		fre:new Schema({ 
			fre:{type:String,required:true,unique:false},
			few:{ type:String,required:true,unique:false},
			otro:{ type:String,required:true,unique:false},
			fre:ListSchemas.putas//las field
		})//end fre
		
	}//List of schemas 
	return ListSchemas


}//end schemas