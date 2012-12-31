
var fs = require('fs'),
    path = require('path');

exports = module.exports = createStatic;

function createStatic(root) {
    return function(req, res, next) {
        var name = req.url;

        if (name.indexOf('..') >= 0) { res.writeHead(404, "File not found"); res.end(); return; }

        var filename = path.join(root, name);

        fs.stat(filename, function(err, stat){
            if (err) return next();
            if (stat.isDirectory()) { res.writeHead(404, "File not found"); res.end(); return; }
            var stream = fs.createReadStream(filename);
            stream.pipe(res);
        });
    };
}

