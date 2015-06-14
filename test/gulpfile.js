var gulp = require("gulp")
,		babel = require('gulp-babel')
,		spawn = require('child_process').exec
,		fs = require('fs')
,   list = ["./app.js","./setting/**/*"];


var run = function() {
	console.log('RUNNING')
	var p = spawn('nodemon ./build/app.js')

	p.stdout.on('data', function (data) {
	  console.log('stdout: ' + data);
	});

	p.stderr.on('data', function (data) {
	 // console.log('stderr: ' + data);
	});

	p.on('exit', function (code) {
	  console.log('child process exited with code ' + code);
	});
	

	/*
	function(err,stdout,stdin) {
		if(err) return console.log(err,"err")
		console.log(stdout,"stdout")	
		console.log(stdin,"stdin")
		console.log('ewgew')

	})
	.on("data",function(data) {
		console.log(data,"data")
	})
	.on("end",function() {
		console.log('END')
	})
	.on("close",function() {
		console.log('Close')
	})
	*/

	
}//end run

	

var copy = function () {
	this
		.src("./app.js")
		.pipe(babel())
		.pipe( gulp.dest("./build") )

	this
		.src("./setting/**/*")
		.pipe(babel())
		.pipe( gulp.dest("./build/setting") )
	/*
	*/

}//end copy


var watch = function() {
	console.log('WATCH')
	this
		.watch(list,['copy','run'])
}//end watch 


gulp
	.task('copy',copy)
	.task('run',run)
	.task('watch',watch)
	.task('default', ['copy','watch','run'])








































