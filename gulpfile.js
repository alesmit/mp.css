var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('minify', function() {
    return gulp.src('./src/*.css')
        .pipe(concat('mp.css'))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(rename('mp.min.css'))
        .pipe(gulp.dest('dist'));
});