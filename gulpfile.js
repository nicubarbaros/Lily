var gulp = require('gulp')
, uglify = require("gulp-uglify")
, concat = require("gulp-concat");

var getVersion = function () {
    info = require("./package.json");
    return info.version;
};

gulp.task('build', function () {
    gulp.src('./lily.js')
    .pipe(uglify({preserveComments:'some'}))
    .pipe(concat('lily.min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['build']);