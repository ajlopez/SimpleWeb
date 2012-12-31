
var repository = require('../model/repository'),
    layout = require('./layout');

exports = module.exports = function (req, res) {
    layout(req, res, { title: 'New Customer' }, doBody);
}

function doBody(req, res)
{
    res.write('<form action="/customer/newprocess" method="post">\n');
    res.write('<fieldset>\n');
    res.write('<legend>Name</legend>\n');
    res.write('<div><input name="name"></div>\n');
    
    res.write('</fieldset>\n');

    res.write('<input type="submit" value="Submit"/>\n');
    res.write('</form>\n');
}
