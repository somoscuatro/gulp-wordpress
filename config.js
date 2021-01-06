const src = './assets/';
const dist = './dist/';

module.exports = {
  src: {
    main: src,
    sass: [
      src + 'styles/**/*.scss',
    ],
    js: [
      src + 'scripts/**/*.js',
    ],
    images: [
      src + 'images/**/*',
    ],
    fonts: [
      src + 'fonts',
    ],
  },
  dist: {
    main: dist,
    styles: [
      dist + 'styles',
    ],
    scripts: [
      dist + 'scripts',
    ],
    images: dist + 'images',
    fonts: dist + 'fonts',
  },
};
