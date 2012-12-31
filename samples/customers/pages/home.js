
var repository = require('../model/repository'),
    layout = require('./layout');

exports = module.exports = function (req, res) {
    layout(req, res, { title: 'Home' }, doBody);
}

function doBody(req, res)
{
    res.write('<div>Dynamic sample, customers in-memory model.</div>');
    res.write('<div>Using query string parsing, and body parsing in posts.</div>');
    res.write('<div>Static files.</div>');
}
