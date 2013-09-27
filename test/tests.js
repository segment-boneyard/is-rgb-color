
describe('is-rgb-color', function () {

  var assert = require('assert');
  var rgb = require('is-rgb-color');

  it('should recognize rgb strings', function () {
    assert(rgb('rgb(255,255,255)'));
    assert(rgb('rgb(0, 0, 0)'));
    assert(rgb('rgb( 33 , 131 , 02 )'));
  });

  it('should recognize rgba strings', function () {
    assert(rgb('rgba(255,255,255,1)'));
    assert(rgb('rgba(0, 0, 0, 0)'));
    assert(rgb('rgba( 34 , 123 , 0 , 0.433333)'));
  });

  it('should recognize non rgba strings', function () {
    assert(!rgb('a'));
    assert(!rgb('rgb()'));
    assert(!rgb('#FFFFFF'));
  });

});