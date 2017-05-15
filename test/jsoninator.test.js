const { stringify } = require('../jsoninator');

describe('stringify()', () => {

  it('can stringify a number', () => {
    expect(stringify(9)).toEqual('9');
  });

  it('can stringify null', () => {
    expect(stringify(null)).toEqual('null');
  });

  it('can stringify true', () => {
    expect(stringify(true)).toEqual('true');
  });

  it('can stringify false', () => {
    expect(stringify(false)).toEqual('false');
  });

  it('can stringify a simple string', () => {
    expect(stringify('Hello world')).toEqual('"Hello world"');
  });

  it('can stringify an empty array', () => {
    expect(stringify([])).toEqual('[]');
  });

  it('can stringify a single-element array', () => {
    expect(stringify([8])).toEqual('[8]');
  });

  it('can stringify an array of heterogeneously-typed values', () => {
    expect(stringify([8, 'hi'])).toEqual('[8,"hi"]');
  });

  it('can stringify an array of numbers', () => {
    expect(stringify([1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999])).toEqual(
      '[1,0,-1,-0.3,0.3,1343.32,3345,0.00011999999999999999]');
  });

  it('can stringify a nested array', () => {
    expect(stringify([8, [[], 3, 4]])).toEqual('[8,[[],3,4]]');
  });

  it('can stringify a deeply-nested array', () => {
    expect(stringify([[[['foo']]]])).toEqual('[[[["foo"]]]]');
  });
  
  it('can stringify an empty object literal', () => {
    expect(stringify({})).toEqual('{}');
  });
  it('can stringify a simple object literal', () => {
    expect(stringify({'a': 'apple'})).toEqual('{"a":"apple"}');
  });
  it('can stringify objects nested in objects', () => {
    expect(stringify({'a': {'b': 'c'}})).toEqual('{"a":{"b":"c"}}');
  });
  it('can stringify objects nested in arrays', () => {
    expect(stringify([{'a': 'b'}, {'c': 'd'}])).toEqual('[{"a":"b"},{"c":"d"}]');
  });

  it('can stringify arrays nested in objects', () => {
    expect(stringify({'a': ['b', 'c']})).toEqual('{"a":["b","c"]}');
  });

});