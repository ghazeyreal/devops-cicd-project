const test = require('node:test');
const assert = require('node:assert');
const { MESSAGE } = require('./app');

test('application returns the expected message', () => {
  assert.equal(MESSAGE, 'Hello from my CI/CD application!');
});