
var simpleweb = require('..'),
    assert = require('assert');

assert.ok(simpleweb);
assert.equal(typeof simpleweb, 'function');

// get application

var app = simpleweb();
assert.ok(app);
assert.equal(typeof app, 'function');
assert.equal(app.length, 2);

// use function

assert.ok(app.use);
assert.equal(typeof app.use, 'function');

// register and call middlewarevar a = 0;function setA(req, res, next) {    a = 1;    if (next)        next();};
app.use(setA);app();assert.ok(a, 1);// register and call two middlewaresvar a = 0;function set1(req, res, next) {    a = 1;    if (next)        next();};function set2(req, res, next) {    a *= 2;    if (next)        next();};app.use(set1);app.use(set2);app();assert.ok(a, 2);