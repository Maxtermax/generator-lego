/*
	/////////////////////////////
		EXPRESS CONFIGURATIONS
	/////////////////////////////

	Buid you setting stack with this commands:

	express set --views 'some absolute path'
	express set --engine 'any engine'
	express set --static 'some path'
*/

app
	.use(require('cors')())//middlewares acess among server's 
	.use(require('morgan')(  ))//middleware debug
	.use(require('method-override')())//middleware put and delete request