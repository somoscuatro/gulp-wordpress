/*
  styles.js
*/

const gulp = require('gulp');

module.exports = function(config, pkg) {
  const argv = require('yargs').argv;
  const isProduction = (argv.production === undefined) ? false : true;

  /**
   * Compiles Sass files.
   *
   * Sass files are compiled to the `dist/styles` folder. Copyright
   * information from `package.json` is injected in the compiled CSS file.
   * If the gulp command is executed with the `--production` option sourcemaps
   * are not created.
   */
  gulp.task('sass', function() {
    const autoprefixer = require('autoprefixer');
    const changed = require('gulp-changed');
    const gulpIf = require('gulp-if');
    const handleErrors = require('../utils/handleErrors');
    const rename = require('gulp-rename');
    const sass = require('gulp-sass');
    const sourcemaps = require('gulp-sourcemaps');

    const task = gulp.src(config.src.sass)
        .pipe(changed(config.dist.main, {extension: '.css'}))
        .pipe(gulpIf(!isProduction, sourcemaps.init()))
        .pipe(sass({
          compress: true,
          outputStyle: isProduction ? 'compressed' : 'nested',
          use: [
            autoprefixer(),
          ],
        }))
        .pipe(gulpIf(!isProduction, sourcemaps.write(config.sourcemaps)))
        .pipe(gulpIf(isProduction, rename({
          suffix: '.min',
        })))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dist.styles));
    return task;
  });
};
