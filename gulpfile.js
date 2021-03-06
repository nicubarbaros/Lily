var gulp = require('gulp')
, uglify = require('gulp-uglify')
, concat = require('gulp-concat')
, cleanCSS = require('gulp-clean-css');

var getVersion = function () {
    info = require("./package.json");
    return info.version;
};

gulp.task('minify-js', function () {
    gulp.src('./dist/lily.js')
    .pipe(uglify({preserveComments:'some'}))
    .pipe(concat('lily.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-css', function() {
  gulp.src('./dist/assets/lily.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(concat('lily.min.css'))
  .pipe(gulp.dest('./dist/assets/'));
})

gulp.task('default', ['minify-js', 'minify-css']);