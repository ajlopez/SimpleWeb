
var repository = require('../model/repository'),
    layout = require('./layout');

exports = module.exports = function (req, res) {
    layout(req, res, { title: 'Customer' }, doBody);
}

function doBody(req, res)
{
    var id = parseInt(req.query.id);
    var customer = repository.getById(id);
    res.write('<div class="btn-group actions">\n');
    res.write('<a class="btn btn-info" href="/customer">Customers</a>\n');
    res.write('<a class="btn btn-primary" href="/customer/update?id=' + id + '">Update</a>\n');
    res.write('<a class="btn btn-danger" href="/customer/delete?id=' + id + '">Delete</a>\n');
    res.write('</div>\n');
    res.write('<table class="table-striped table-bordered view">\n');
    res.write('<tr><td>Id</td><td>' + id + '</td></tr>\n');
    res.write('<tr><td>Name</td><td>' + customer.name + '</td></tr>\n');
    res.write('</table>\n');
}
