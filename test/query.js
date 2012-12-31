
var simpleweb = require('..'),
    assert = require('assert');
assert.ok(simpleweb.query);assert.equal(typeof simpleweb.query, 'function');var query = simpleweb.query();
assert.ok(query);// invoke with urlvar req = { url: '/page?name=foo' };query(req,null,function() {});assert.ok(req.query);assert.ok(req.query.name);assert.equal(req.query.name, 'foo');// use and invokevar app = simpleweb();app.use(simpleweb.query());var req = { url: '/page?name=foo&data=bar' };app(req, null);assert.ok(req.query);assert.ok(req.query.name);assert.equal(req.query.name, 'foo');assert.ok(req.query.data);assert.equal(req.query.data, 'bar');