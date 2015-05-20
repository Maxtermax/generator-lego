var express = require('express')
,	app = express()
,	server = http.createServer(app)
,	port = process.env.PORT || 3000

app.env = (port === 3000) ?'dev':'pro';

//begin settings
//end settings

server
	.listen(port,()=> console.log('Listen on port',port))


