
var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify',function () {
	gulp.src('client/app.js')
		.pipe(browserify({transform : 'babelify'}))
		.pipe(gulp.dest('public/js'));
});

gulp.task('default',['browserify']);

gulp.task('watch',function () {
	gulp.watch('client/**/*.js',['default']);
})
