class Sc {
	//begin constructor 	
	constructor(data) {
		this.app = data.app
	}
	//end constructor 
	saluda(req,res) {
		res.send("Allo "+saluda)
	}//end saluda	

}//end class routes 
var f = new Sc({app:"wfew"})

console.log(f.saluda)




















