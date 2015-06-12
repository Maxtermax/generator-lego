var gulp = require("gulp")
,		babel = require('gulp-babel')
,		exec = require('child_process').exec
,		fs = require('fs')
,   list = ["./app.js","./setting/**/*"];


var run = function() {
	console.log('RUNNING')
	exec('nodemon ./build/app.js',function(err,stdout,stdin) {
		if(err) return console.log(err,"err")
		console.log(stdout,"stdout")	
		console.log(stdin,"stdin")
		console.log('ewgew')

	})
	
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









































