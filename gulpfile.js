var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

var imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('images', function() {
  gulp.src('images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('images'));
});

gulp.task('default', ['sass', 'images']);
