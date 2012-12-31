
var simpleweb = require('..'),
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
