#!/usr/bin/env node

'use strict';
const meow = require('meow');
const myapp = require('./');

const cli = meow(`
	Usage
	  $ myapp-cli [input]

	Examples
	  $ myapp-cli ponies
	  Hello World!
`);

if (cli.input.length === 0) {
	console.log('\nMissing input parameter');
	console.log(cli.help);
} else {
	console.log(myapp(cli.input[0]));
}
