
var gulp       = require("gulp");
var concat     = require("gulp-concat");
var uglify     = require("gulp-uglify");
var rename     = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var qunit      = require("gulp-qunit");

var VERSION = "0.1.0";

var srcs  = [
  "src/_init_.js",
  "src/constructors.js",
  "src/functions.js"
];

gulp.task("library", function() {
  return gulp.src(srcs)
		.pipe(sourcemaps.init())
    .pipe(concat("rgm-" + VERSION + ".js"))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/"))
    .pipe(uglify())
    .pipe(rename("rgm-" + VERSION + ".min.js"))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("default", ["library"]);

gulp.task("test", ["library"], function() {
    return gulp.src("./test/index.html")
        .pipe(qunit());
});

gulp.task("watch", ["library"], function() {
  gulp.watch(srcs, ["library"])
});
