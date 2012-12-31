
var simpleweb = require('..'),
    assert = require('assert');
assert.ok(simpleweb.query);assert.equal(typeof simpleweb.query, 'function');var query = simpleweb.query();
assert.ok(query);