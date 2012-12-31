'use strict';

var query = require('./middleware/query');
var stat = require('./middleware/static');
var body = require('./middleware/body');
var url = require('url');

exports = module.exports = createApplication;

function createApplication() {
    var stack = [];
    var getmap = {};

    var app = function (req, res) {
        var funcs = stack.slice(0);

        doFuncs();

        function doFuncs() {
            var func = funcs.shift();

            if (func)
                return func(req, res, doFuncs);

            res.writeHead(404, 'Page not found');
            res.end();
        }
    };

    app.router = function (req, res, next) {
        var pathname = url.parse(req.url).pathname;
        var func = getmap[pathname];

        if (func)
            return func(req, res);

        next();
    }

    app.use = function (middleware) {
        stack.push(middleware);
    };

    app.get = function (path, func) {
        getmap[path] = func;
    };

    return app;
};

createApplication.query = query;
createApplication.static = stat;
createApplication.body = body;
