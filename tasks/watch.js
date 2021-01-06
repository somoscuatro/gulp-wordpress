/*
  watch.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  const fs = require('fs');

  /**
   * Watches files and run related tasks if there are changes.
   */
  gulp.task('watch:start', function() {
    gulp.watch([
      config.src.sass,
    ], gulp.series(
        'lint:sass', 'sass'
    ));
    gulp.watch([
      config.src.js,
    ], gulp.series(
        'lint:js', 'js'
    ));
    gulp.watch(config.src.images, gulp.series(
        'images'
    ));
    gulp.watch(config.src.fonts, gulp.series(
        'fonts:google', 'fonts:custom'
    ));
  });

  /**
   * Checks if the dist folder exists or not. If not, run the build task
   * before starting to watch.
   */
  if (fs.existsSync(config.dist.main)) {
    gulp.task('watch', gulp.series('watch:start', function(cb) {
      cb();
    }));
  }
  else {
    gulp.task('watch', gulp.series('build', 'watch:start', function(cb) {
      cb();
    }));
  }
};
