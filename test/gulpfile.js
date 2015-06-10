var gulp = require("gulp")
,		babel = require('gulp-babel')
,		exec = require('child_process').exec
,		fs = require('fs')
,   list = ["./app.js","./setting/**/*"];

var run = function() {
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
	exec('node ./build/app.js',function(err,res) {
		if(err) return console.log(err,"err")
		console.log(res)
	})
	*/

}//end copy


var watch = function() {
	this.watch("./app.js",['copy','run'])
}//end watch 


gulp
	.task('copy',copy)
	.task('run',run)
	.task('watch',watch)
	.task('default', ['copy','run','watch'])









































