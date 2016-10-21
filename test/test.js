var expect = require('chai').expect;

var app = require('../server.js');

describe('unittest', function() {
  describe('addresses', function() {
    it('expect addreses to be an array', function() {
      expect(app.addresses).to.be.a('array');
    });   
  });
});