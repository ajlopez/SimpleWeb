
var fs = require('fs'),
    querystring = require('querystring');

exports = module.exports = createPost;

function createPost(root) {
    return function(req, res, next) {
        if (req.method !== 'POST') return next();

        // from http://blog.frankgrimm.net/2010/11/howto-access-http-message-body-post-data-in-node-js/
        var fullBody = '';

        req.on('data', function(chunk) {
            // append the current chunk of data to the fullBody variable
            fullBody += chunk.toString();
        });
            
        req.on('end', function() {    
            // parse the received body data
            req.body = querystring.parse(fullBody);
            next();
        });
    };
}

