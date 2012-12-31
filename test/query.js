
var simpleweb = require('..');
exports['query exists'] = function(test) {    test.ok(simpleweb.query);    test.equal(typeof simpleweb.query, 'function');    test.done();}exports['query returns'] = function(test) {    var query = simpleweb.query();    test.ok(query);    test.done();}// invoke with urlexports['invoke with url'] = function(test) {    var req = { url: '/page?name=foo' };    var query = simpleweb.query();    query(req,null,function() {});    test.ok(req.query);    test.ok(req.query.name);    test.equal(req.query.name, 'foo');    test.done();}// use and invokeexports['invoke with url with two arguments'] = function(test) {    var app = simpleweb();    app.use(simpleweb.query());    var req = { url: '/page?name=foo&data=bar' };    app(req, null);    test.ok(req.query);    test.ok(req.query.name);    test.equal(req.query.name, 'foo');    test.ok(req.query.data);    test.equal(req.query.data, 'bar');    test.done();}