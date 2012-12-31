
var repository = require('../model/repository');

exports = module.exports = function (req, res, model, body) {
    doHeader(res, model);
    body(req, res);
    doFooter(res, model);
    res.end();
}

function doHeader(res, model)
{
    var title = model.title;

    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<html><head><title>');
    res.write('Simple Dynamic Sample: ' + title);
    res.write('</title>');
    res.write('<link rel="stylesheet" href="/css/bootstrap.css">');
    res.write('<link rel="stylesheet" href="/css/styles.css">');
    res.write('</head>');
    res.write('<body>');

    res.write('<div class="navbar">\n');
    res.write('<div class="navbar-inner">\n');
    res.write('<div class="container">\n');
    res.write('<div class="nav">\n');
    res.write('<ul class="nav">\n');

    res.write('<li>\n');
    res.write('<a href="/">Home</a>\n');
    res.write('</li>\n');
    res.write('<li>\n');
    res.write('<a href="/customer">Customers</a>\n');
    res.write('</li>\n');

    res.write('</ul>\n');
    res.write('</div>\n');
    res.write('</div>\n');
    res.write('</div>\n');
    res.write('</div>\n');

    res.write('<div class="content">\n');
        
    res.write('<h1>');
    res.write(title);
    res.write('</h1>\n');
}

function doFooter(res)
{
    res.write('</div>\n');
    res.write('<div class="footer">Powered by <a href="https://github.com/ajlopez/SimpleWeb">SimpleWeb</a>\n');
    res.write('</body>\n');
    res.write('</html>\n');
}
