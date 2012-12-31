
var url = require('url');

exports = module.exports = createQuery;

function createQuery() {
    return function(req, res, next) {
       var data = url.parse(req.url, true);
       req.query = data.query;
       return next();
    };
}