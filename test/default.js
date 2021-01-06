/* global describe, it */
const chai = require('chai');
const expect = require('chai').expect;
const fs = require('chai-fs');
chai.use(fs);

describe('default', function() {
  it('The `dist` folder is created.', function(done) {
    expect('test-website/dist').to.be.a.directory();
    done();
  });

  // Styles.
  it('The Sass is correctly compiled in the `dist/styles` folder.',
      function(done) {
        expect(
            'test-website/dist/styles/main.css'
        ).to.be.a.file().and.not.empty;
        done();
      }
  );

  it('The CSS sourcemaps are created.', function(done) {
    expect(
        'test-website/dist/styles/main.css'
    ).to.be.a.file().with.contents.that.match(/sourceMappingURL/);
    done();
  });

  // Scripts.
  it('The JavaScript is correctly compiled in the `dist/scripts` folder.',
      function(done) {
        expect(
            'test-website/dist/scripts/main.js'
        ).to.be.a.file().and.not.empty;
        done();
      }
  );

  it('The JavaScript sourcemaps are created.', function(done) {
    expect(
        'test-website/dist/scripts/main.js'
    ).to.be.a.file().with.contents.that.match(/sourceMappingURL/);
    done();
  });

  // Fonts
  it('Google Fonts are downloaded.', function(done) {
    expect(
        'test-website/dist/fonts/Indie_Flower-normal-400.woff'
    ).to.be.a.file().and.not.empty;
    expect('test-website/dist/fonts/fonts.css').to.be.a.file().and.not.empty;
    done();
  });
});
