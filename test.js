const assert = require('assert');
require('mocha');
const fn = require('./index');

describe('Main output', () => {
	it('should be Hello World!', () => {
		assert.equal(fn(), 'Hello World!');
	});
});
