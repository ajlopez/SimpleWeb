
var simpleweb = require('..');
exports['get is an application function'] = function(test) {
    var app = simpleweb();
    test.ok(app.get);
    test.equal(typeof app.get, 'function');    test.done();}

exports['register and call get'] = function(test) {
    var app = simpleweb();
    app.get('/', function(req, res) {
        test.equal(req.url, '/');
        test.done();
    });
    app({ url: '/', method: 'GET' }, null);
}
