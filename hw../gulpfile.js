const gulp = require("gulp");
const sassCompiler = require("sass");
const gulpSass = require("gulp-sass")(sassCompiler);
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");
const concatCss = require("gulp-concat-css");
const htmlmin = require("gulp-htmlmin");

function sassTask() {
  return gulp
    .src("app/sass/**/*.+(scss|sass)")
    .pipe(gulpSass())
    .pipe(concatCss("style.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/styles"));
}

function htmlTask() {
  return gulp
    .src("**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
}

function scriptTask() {
  return gulp
    .src("app/*.js")
    .pipe(concat("script.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist"));
}

function watchTask() {
  gulp.watch("app/sass/**/*.+(scss|sass)", sassTask);
  gulp.watch("app/**/*.html", htmlTask);
  gulp.watch("app/**/*.js", scriptTask);
}

exports.sass = sassTask;
exports.html = htmlTask;
exports.script = scriptTask;
exports.watch = watchTask;
