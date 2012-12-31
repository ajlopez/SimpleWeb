
var simpleweb = require('..');

exports['simpleweb is a function'] = function(test) {
    test.ok(simpleweb);
    test.equal(typeof simpleweb, 'function');
    test.done();
}

exports['get application'] = function(test) {
    var app = simpleweb();
    test.ok(app);
    test.equal(typeof app, 'function');
    test.equal(app.length, 2);
    test.done();
}

exports['use is a function'] = function(test) {
    var app = simpleweb();
    test.ok(app.use);
    test.equal(typeof app.use, 'function');
    test.done();
}

exports['register and call a middleware'] = function(test) {
    var a = 0;    function setA(req, res, next) {        a = 1;    };
    var app = simpleweb();
    app.use(setA);    app();    test.ok(a, 1);
    test.done();
}exports['register and call two middlewares'] = function(test) {    var a = 0;    function set1(req, res, next) {        a = 1;        next();    };    function set2(req, res, next) {        a *= 2;    };    var app = simpleweb();
    app.use(set1);    app.use(set2);    app();    test.ok(a, 2);
    test.done();}