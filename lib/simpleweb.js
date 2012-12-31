'use strict';

exports = module.exports = createApplication;

function createApplication() {
    var app = function(req, res) {};
    app.use = use;
    return app;
};

function use(middleware) {
    if (!this.middlewares)
        this.middlewares = [];

    this.middlewares.push(middleware);
};