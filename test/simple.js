
var simpleweb = require('..'),
    assert = require('assert');

assert.ok(simpleweb);
assert.equal(typeof simpleweb, 'function');

// get application

var app = simpleweb();
assert.ok(app);
assert.equal(typeof app, 'function');
assert.equal(app.length, 2);

// use function

assert.ok(app.use);
assert.equal(typeof app.use, 'function');


