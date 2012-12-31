
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
}exports['static file not found when malicious .. in url'] = function(test) {    var app = simpleweb();    app.use(simpleweb.static(path.join(__dirname, 'public')));    app.use(function(req, res, next) { test.done(); });    test.expect(2);    var req = { url: '../foo.txt' };    var res = {        writeHead: function(err, text) {            test.equal(err, 404);            test.equal(text, 'File not found');        },        end: function() {            test.done();        }    };    app(req, res);}exports['send static file'] = function(test) {    var app = simpleweb();    app.use(simpleweb.static(path.join(__dirname, 'public')));    app.use(function(req, res, next) { test.done(); });    test.expect(5);    var req = { url: '/hello.txt' };    var content = '';    var res = {        on: function(name) {        },        emit: function(name, chunck) {            test.equal(name, 'pipe');            test.ok(chunck);            test.ok(chunck.path);            test.ok(chunck.readable);            test.equal(chunck.path, path.join(__dirname, 'public/hello.txt'));        },        removeListener: function() { },        end: function() {            test.done();        }    };    app(req, res);}exports['send index.html static file'] = function(test) {
    var app = simpleweb();
    app.use(simpleweb.static(path.join(__dirname, 'public')));
    app.use(function(req, res, next) { test.done(); });
    test.expect(5);

    var req = { url: '/' };

    var content = '';

    var res = {
        on: function(name) {
        },
        emit: function(name, chunck) {
            test.equal(name, 'pipe');
            test.ok(chunck);
            test.ok(chunck.path);
            test.ok(chunck.readable);
            test.equal(chunck.path, path.join(__dirname, 'public/index.html'));
        },
        removeListener: function() { },
        end: function() {
            test.done();
        }
    };

    app(req, res);
}

