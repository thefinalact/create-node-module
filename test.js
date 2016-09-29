var assert = require('assert');
var mocha = require('mocha');
var myapp = require('./app');

describe('Main output', () => {
	it('should be Hello World!', () => {
		assert.equal(myapp(), 'Hello World!');
	});
});