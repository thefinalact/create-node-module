#!/usr/bin/env node

'use strict';
const meow = require('meow');
const index = require('./index');

const cli = meow(`
	Usage
	  $ my-app-cli [input]

	Examples
	  $ my-app-cli ponies
	  Hello World!
`);

if (cli.input.length === 0) {
	console.log('\nMissing input parameter');
	console.log(cli.help);
} else {
	console.log(index(cli.input[0]));
}
