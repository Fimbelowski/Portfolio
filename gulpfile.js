var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    CleanCSS = require('clean-css');

// Define the default task and add the watch task to it.
gulp.task('default', ['watch']);

// Configure the jshint task.
gulp.task('jshint', function() {
    return gulp.src('source/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Configure the concat task.
gulp.task('concat-js', function() {
    return gulp.src('source/scripts/**/(.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

// Configure the SASS task.
gulp.task('build-css', function() {
    return gulp.src('source/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(CleanCSS())
    .pipe(gulp.dest('dist/css/'));
});

// Configure which files to watch and what tasks to use on those file changes.
gulp.task('watch', function() {
    gulp.watch('source/scripts/**/*.js', ['jshint']);
    gulp.watch('source/scss/**/*.scss', ['build-css']);
});