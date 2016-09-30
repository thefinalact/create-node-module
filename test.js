const assert = require('assert');
require('mocha');
const fn = require('./');

describe('Main output', () => {
	it('should be Hello World!', () => {
		assert.equal(fn(), 'Hello World!');
	});
});
