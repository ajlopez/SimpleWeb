
var repository = require('../model/repository'),
    layout = require('./layout');

exports = module.exports = function (req, res) {
    layout(req, res, { title: 'Customers' }, doBody);
}

function doBody(req, res)
{
    res.write('<div class="btn-group actions">\
<a class="btn btn-primary" href="/customer/new">New Customer</a>\
</div>');
    
    res.write('<table class="table-striped table-bordered list">\n');
    res.write('<tr><th>Id</th><th>Name</th></tr>\n');

    var customers = repository.getList();
    
    customers.forEach(function(customer) {
        res.write('<tr>\n');
        res.write('<td><a href="/customer/view?id=' + customer.id + '">' + customer.id + '</a></td>\n');
        res.write('<td>' + customer.name + '</td>\n');
        res.write('</tr>\n');
    });
    
    res.write('</table>\n');
}
