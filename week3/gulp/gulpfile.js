/* gulpfile.js */

var gulp 	= require('gulp');
var gutil 	= require('gulp-util');
var jshint 	= require('gulp-jshint');
var concat 	= require('gulp-concat');
var uglify 	= require('gulp-uglify');
var rename 	= require('gulp-rename');

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
	return gulp.src('source/javascript/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	gulp.watch('source/javascript/**/*.js', ['jshint']);
});

gulp.task('build-js', function() {
	return gulp.src('source/javascript/**/*.js')
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(rename('vendor.min.js'))
		.pipe(gulp.dest('build'))
		.on('error', gutil.log)
});