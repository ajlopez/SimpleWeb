
var simpleweb = require('..'),
    path = require('path');

exports['static exists'] = function(test) {
    test.ok(simpleweb.static);
    test.equal(typeof simpleweb.static, 'function');
    test.done();
};

exports['static returns a function'] = function(test) {
    var static = simpleweb.static(__dirname);
    test.ok(static);
    test.done();
};

exports['static call next when file not found'] = function(test) {
    var app = simpleweb();
    app.use(simpleweb.static(path.join(__dirname, 'public')));
    app.use(function(req, res, next) { test.done(); });
    test.expect(0);

    app({ url: '/foo.txt' }, null );
}