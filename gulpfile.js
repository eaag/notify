'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jade', function() {
  gulp.src('./dev/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
  gulp.src('./dev/sass/style.scss')
    .pipe(sourcemaps.init())
  	.pipe(sass().on('error', sass.logError))
  	.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('jade:w', function(){
	gulp.watch('./dev/jade/*.jade', ['jade']);
});

gulp.task('sass:w', function (){
  gulp.watch('./dev/sass/**/*.scss', ['sass']);
});

gulp.task('produccion', function() {
	gulp.src('./dev/jade/*.jade')
	    .pipe(jade())
	    .pipe(gulp.dest('./'));

	 gulp.src('./dev/sass/style.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(sass({outputStyle: 'compressed'}))
	    .pipe(sourcemaps.init())
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest('./css/'));

});


gulp.task('default', ['sass:w','jade:w']);