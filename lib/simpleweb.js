'use strict';

var query = require('./middleware/query');
var stat = require('./middleware/static');
var post = require('./middleware/post');

exports = module.exports = createApplication;

function createApplication() {
    var stack = [];

    var app = function(req, res) {
        var funcs = stack.slice(0);

        doFuncs();

        function doFuncs() {
            var func = funcs.shift();

            if (func)
                func(req, res, doFuncs);
        }
    };

    app.use = function(middleware) {
        stack.push(middleware);
    };

    return app;
};

createApplication.query = query;
createApplication.static = stat;
createApplication.post = post;
