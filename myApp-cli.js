#!/usr/bin/env node

'use strict';
const meow = require('meow');
const myApp = require('./');

const cli = meow(`
	Usage
	  $ myApp-cli [input]

	Examples
	  $ myApp-cli ponies
	  Hello World!
`);

if (typeof input == 'undefined') {
	console.log("\nMissing input parameter");
	console.log(cli.help);
} else {
	console.log(myApp(cli.input[0]));
}