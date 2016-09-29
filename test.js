import test from 'ava';
import fn from './';

test('Print Hello World!', t => {
	t.is(fn(), 'Hello World!');
});
