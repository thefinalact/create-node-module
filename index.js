'use strict';
const repl = require('repl');
const hello = require('./hello-world');

const replServer = repl.start({
	prompt: 'my-app > '
});

replServer.context.hello = hello;
