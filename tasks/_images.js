/*
  images.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  const argv = require('yargs').argv;
  const isProduction = (argv.production === undefined) ? false : true;

  /**
   * Optimizes JPEG, GIF, PNG and SVG images.
   *
   * mozjpeg, gisicle, optipgng and svgo libraries are used.
   * If the gulp command have the production option, a rev-manifest.json file
   * is created. It will be used to add a static asset revisioning hash.
   */
  gulp.task('images', function() {
    const changed = require('gulp-changed');
    const gulpIf = require('gulp-if');
    const imagemin = require('gulp-imagemin');

    const task = gulp.src(config.src.images)
        .pipe(changed(config.dist.images))
        .pipe(imagemin([
          imagemin.mozjpeg({
            quality: 80,
            progressive: true,
          }),
          imagemin.gifsicle({
            interlaced: true,
          }),
          imagemin.optipng({
            optimizationLevel: 5,
          }),
          imagemin.svgo({plugins: [{
            removeUnknownsAndDefaults: false,
          },
          {
            cleanupIDs: false,
          }],
          }),
        ]))
        .pipe(gulp.dest(config.dist.images))
        .pipe(gulpIf(isProduction, gulp.dest(config.dist.main)));
    return task;
  });
};
