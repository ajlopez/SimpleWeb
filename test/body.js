
var simpleweb = require('..'),
    path = require('path');

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
