var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var karma = require('karma').server;
var karmaConfig = require('./karma.js');

var paths = {
  sass: ['./www/**/*.scss'],
  scripts: ['./www/**/*.js', '!./www/lib/**/*.js']
};

gulp.task('jshint', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function (done) {
  karma.start(karmaConfig, done);
});

gulp.task('sass', function () {
  return gulp.src('./www/css/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths: []
    }))
    .pipe(concat('css/main.css'))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.scripts, ['jshint', 'test']);
});

gulp.task('default', ['jshint', 'test', 'sass', 'watch']);
