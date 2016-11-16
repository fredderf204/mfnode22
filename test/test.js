var expect = require('chai').expect;
var app = require('../server.js');
var addresses = require('../server.js');

describe('unittest', function() {
  describe('addresses', function() {
    it('expect addreses to be an array', function() {
      expect(addresses).to.be.a('array');
    }); 
    }); 
  describe('hostname', function() {
    it('expect hostname to be an array', function() {
      
      expect().to.be.a('string');
  });
});
});