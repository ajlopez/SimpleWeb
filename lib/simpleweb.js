'use strict';

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
