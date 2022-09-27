"use strict";

var assert = require('assert');
var unslugify = require("..");

describe('Unslugify', function () {
    it('it should return from kebab case str to normal unslugify str', function () {
      assert.equal(unslugify("some-string-goes-here"), "some string goes here");
  });

    it('it should return from snake case str to normal unslugify str', function () {
      assert.equal(unslugify("some_string_goes_here",
      {
        replacement: '-'
      }), "some string goes here");
  });

    it('it should return from snake case str to normal unslugify str but in upper case', function () {
      assert.equal(unslugify("some_string_goes_here",
      {
        replacement: '-',
        lower: false
      }), "SOME STRING GOES HERE");
  });

    it('it should return from snake case str to normal unslugify str and capitalize each words', function () {
      assert.equal(unslugify("some_string_goes_here",
      {
        replacement: '-',
        capitalizeEachWord: true,
      }), "Some String Goes Here");
  });
});