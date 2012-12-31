
var simpleweb = require('..');

    var app = simpleweb();
    test.ok(app.get);
    test.equal(typeof app.get, 'function');

exports['router is an application function'] = function(test) {
    var app = simpleweb();
    test.ok(app.router);
    test.equal(typeof app.router, 'function');
    test.done();
}

exports['register and call get'] = function(test) {
    var app = simpleweb();
    app.use(app.router);
    app.get('/', function(req, res) {
        test.equal(req.url, '/');
        test.done();
    });
    app({ url: '/', method: 'GET' }, null);
}