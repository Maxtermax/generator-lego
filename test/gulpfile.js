var gulp = require("gulp")
,		babel = require('gulp-babel')
,		exec = require('child_process').exec
,   list = ["./app.js",'./routes','./setting'];

var run = function() {
	exec('node ./e/app.js',function(err,res) {
		if(err) return console.log(err,"err")
		console.log(res)
	})
}//end run

var copy = function () {
	this
		.src(list)
		.pipe(babel())
		.pipe( gulp.dest("./e") )
}//end copy


var watch = function() {
	this.watch(list,['copy','run'])
}//end watch 


gulp
	.task('copy',copy)
	.task('run',run)
	.task('watch',watch)
	.task('default', ['copy','run','watch'])









































