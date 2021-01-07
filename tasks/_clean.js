/*
  clean.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  /**
   * Cleans dist directory.
   */
  gulp.task('clean', function() {
    const del = require('del');

    return del([
      `${config.dist.main}`,
    ]);
  });
};
