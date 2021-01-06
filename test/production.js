/* global describe, it */
const chai = require('chai');
const expect = require('chai').expect;
const chaifs = require('chai-fs');
chai.use(chaifs);

describe('production', function() {
  // Styles.
  it('CSS file is minified.', function(done) {
    expect(
        'test-website/dist/styles/main.min.css'
    ).to.be.a.file().and.not.empty;
    done();
  });

  it('The CSS sourcemaps are NOT created.', function(done) {
    expect(
        'test-website/dist/styles/main.min.css'
    ).to.be.a.file().with.contents.that.not.match(/sourceMappingURL/);
    done();
  });

  // Scripts.
  it('JavaScript file is minified.', function(done) {
    expect(
        'test-website/dist/scripts/main.min.js'
    ).to.be.a.file().and.not.empty;
    done();
  });

  it('The JavaScript sourcemaps are NOT created.', function(done) {
    expect(
        'test-website/dist/scripts/main.min.js'
    ).to.be.a.file().with.contents.that.not.match(/sourceMappingURL/);
    done();
  });
});
