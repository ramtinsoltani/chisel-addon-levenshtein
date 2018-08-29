require('mocha');
const expect = require('chai').expect;
const path = require('path');
const levenshtein = require(path.join(__dirname, '../index.js'));

describe('Levenshtein', function() {

  it('should return the levenshtein distance between two strings', function() {

    expect(levenshtein('Hello World!', 'Hello World')).to.equal(1);
    expect(levenshtein('Metal', 'Metal')).to.equal(0);
    expect(levenshtein('Rock', 'r0ck')).to.equal(2);

  });

});
