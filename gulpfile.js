var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
