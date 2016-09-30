const assert = require('assert');
require('mocha');
const index = require('./index');

describe('Main output', () => {
	it('should be Hello World!', () => {
		assert.equal(index(), 'Hello World!');
	});
});
