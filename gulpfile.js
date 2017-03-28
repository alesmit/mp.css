var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var opts = {
    autoprefixer: {
        browsers: ["last 2 version", "> 1%", "ie 7"],
        remove: false
    }
};

// compile sass into css
gulp.task('compile', function() {
    return gulp.src('./src/*.scss')
        .pipe(concat('mp.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(opts.autoprefixer))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

// compress
gulp.task('minify', function() {
    return gulp.src('./dist/mp.css')
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

// generate dist files
gulp.task('build', ['compile', 'minify']);