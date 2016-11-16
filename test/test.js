var expect = require('chai').expect;
var addresses = require('../server.js');

describe('unittest', function() {
  describe('addresses', function() {
    it('expect addreses to be an array', function() {
      expect(addresses).to.be.a('array');
    }); 
});
});