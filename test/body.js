
var simpleweb = require('..');var fs = require('fs');
var path = require('path');

exports['body exists'] = function(test) {
    test.ok(simpleweb.body);
    test.equal(typeof simpleweb.body, 'function');
    test.done();
};

exports['body returns a function'] = function(test) {
    var body = simpleweb.body();
    test.ok(body);
    test.done();
};
exports['body parse content'] = function(test) {    var app = simpleweb();    app.use(simpleweb.body());    test.async();    app.use(function(req, res, next) {        test.ok(req.body);        test.ok(req.body.name);        test.ok(req.body.age);        test.equal(req.body.name, 'Adam');        test.equal(req.body.age, 800);        test.done();    });    req = fs.createReadStream(path.join(__dirname, 'files/body.txt'));    req.method = 'POST';    app(req, null);};

