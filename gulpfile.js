var gulp = require('gulp');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');
var concat = require('gulp-concat');
var connect = require('gulp-connect');


gulp.task('compileLess', function () {
    gulp.src('./ui/src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
});

gulp.task('watchLess', function() {
   gulp.watch('./ui/src/less/**/*.less', ['compileLess'])
   gulp.watch('./ui/src/js/app/**/**/*.js', ['concatScripts'])
});

gulp.task('concatScripts', function () {
    gulp.src([
    './ui/src/js/app/app.js',
    './ui/src/js/app/**/**/_module.js',
    './ui/src/js/app/**/**/!(_module)*.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(connect.reload());
})

gulp.task('runServer', function() {
    connect.server({
        livereload: true,
        port: 8181
    });
});


gulp.task('default', ['compileLess', 'watchLess', 'concatScripts', 'runServer']);




