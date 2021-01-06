/*
  scripts.js
*/

const gulp = require('gulp');

module.exports = function(config, pkg) {
  const argv = require('yargs').argv;
  const isProduction = (argv.production === undefined) ? false : true;

  /**
   * Transpiles JavaScript files.
   *
   * ES6 and ES7 code is transpiled thanks to Babel. Copyright information from
   * `package.json` is injected in the compiled JS file.
   * If the gulp command is executed with the `--production` option,
   * sourcemaps are not created.
   */
  gulp.task('js', function() {
    const browserify = require('browserify');
    const buffer = require('gulp-buffer');
    const changed = require('gulp-changed');
    const gulpIf = require('gulp-if');
    const handleErrors = require('../utils/handleErrors');
    const rename = require('gulp-rename');
    const sourcemaps = require('gulp-sourcemaps');
    const tap = require('gulp-tap');
    const uglify = require('gulp-uglify');

    return gulp.src(config.src.js, {read: false})
        .pipe(changed(config.dist.main, {extension: '.css'}))
        .pipe(tap(function(file) {
          file.contents =
          browserify(file.path, {debug: true})
              .transform('babelify', {presets: ['@babel/preset-env']})
              .bundle();
        }))
        .pipe(buffer())
        .pipe(gulpIf(!isProduction, sourcemaps.init()))
        .pipe(uglify())
        .pipe(gulpIf(isProduction, rename({
          suffix: '.min',
        })))
        .pipe(gulpIf(!isProduction, sourcemaps.write(config.sourcemaps)))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dist.scripts));
  });
};
