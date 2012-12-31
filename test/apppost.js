
var simpleweb = require('..');

    var app = simpleweb();
    test.ok(app.post);
    test.equal(typeof app.post, 'function');

exports['register and call post'] = function(test) {
    var app = simpleweb();
    app.use(app.router);
    app.post('/', function(req, res) {
        test.equal(req.url, '/');
        test.done();
    });
    app({ url: '/', method: 'POST' }, null);
}