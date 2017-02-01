var expect = require('chai').expect;

var addresses = require('../server.js');

describe('Unit Test', function() {
  describe('Get IP Addresses', function() {
    it('expect addreses to be an array', function() {
      expect(addresses.addresses).to.be.a('array');
    });   
  });
});
