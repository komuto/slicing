'use strict';
var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  autoprefixer = require('gulp-autoprefixer'),
  connect = require('gulp-connect');
var sass = require('gulp-sass');
 
gulp.task('connect', function() {
   connect.server({
        livereload: true
    });
});
gulp.task('styles', function(){
  return  gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
    //.pipe(livereload());
});
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(plumber())
    // .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(connect.reload());
    //.pipe(livereload());
});
gulp.task('html', function () {
  gulp.src('./templates/*.html')
    .pipe(plumber())
    .pipe(connect.reload());
    //.pipe(livereload());
});
gulp.task('image', function(){
  // gulp.src('sass/*.scss')
  // .pipe(sass())
   gulp.src('./images/*')
    .pipe(plumber())
    // .pipe(sass({
    //   style: 'compressed'
    // }))
    .pipe(connect.reload());
    //.pipe(livereload());
});

gulp.task('watch', function () {
  //livereload.listen();
  gulp.watch(['./templates/**/*.html'], ['html']);
  gulp.watch(['./sass/**/*.sass'], ['styles']);
 gulp.watch(['js/*.js'], ['scripts']);
  gulp.watch(['./images/*'], ['image']);
});

gulp.task('default', ['image', 'styles', 'connect', 'watch']);