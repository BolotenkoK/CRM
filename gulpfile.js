'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject'); 
sass.compiler = require('node-sass');

 
gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/'));
});
 

 
gulp.task('inject', function () {
  var target = gulp.src('app/index.html');
  var sources = gulp.src(['app/css/**/*.css'], {read: false}); 
  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./app/'));
});

gulp.task('build', gulp.series('sass', 'inject'));

gulp.task('connect', function() {
  connect.server({
    root: './app',
    livereload: true
  })
});