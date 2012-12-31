
var simpleweb = require('..'),    fs = require('fs'),
    path = require('path');

exports['post exists'] = function(test) {
    test.ok(simpleweb.post);
    test.equal(typeof simpleweb.post, 'function');
    test.done();
};

exports['post returns a function'] = function(test) {
    var post = simpleweb.post();
    test.ok(post);
    test.done();
};
exports['post parse content'] = function(test) {    var app = simpleweb();    app.use(simpleweb.post());    test.expect(5);    app.use(function(req, res, next) {        test.ok(req.body);        test.ok(req.body.name);        test.ok(req.body.age);        test.equal(req.body.name, 'Adam');        test.equal(req.body.age, 800);        test.done();    });    req = fs.createReadStream(path.join(__dirname, 'files/post.txt'));    req.method = 'POST';    app(req, null);};