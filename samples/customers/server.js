
var simpleweb = require('../..'),
    path = require('path'),
    http = require('http');
    
var customers = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Google' },
    { id: 3, name: 'Microsoft' }
];

var maxid = 3;

function getCustomerById(id) {
    for (var n in customers) {
        var customer = customers[n];
        if (customer.id === id)
            return customer;
    }
}

function doHeader(res, title)
{
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
    res.write('</h1>');
}

function doFooter(res)
{
    res.write('</div>');
    res.write('</body>');
    res.write('</html>');
}

function doHome(req, res)
{
    doHeader(res, 'Home');
    res.write('<div>Dynamic sample, customers in-memory model.</div>');
    res.write('<div>Using query string parsing, and body parsing in posts.</div>');
    res.write('<div>Static files.</div>');
    doFooter(res);
    res.end();
}

function doTBD(res)
{
    res.write('<div>[TBD]</div>\n');
}

function doCustomerView(req, res)
{
    var id = parseInt(req.query.id);
    var customer = getCustomerById(id);
    doHeader(res, 'Customer');
    res.write('<div class="btn-group actions">\n');
    res.write('<a class="btn btn-info" href="/customer">Customers</a>\n');
    res.write('<a class="btn btn-primary" href="/customer/update?id=' + id + '">Update</a>\n');
    res.write('<a class="btn btn-danger" href="/customer/delete?id=' + id + '">Delete</a>\n');
    res.write('</div>\n');
    res.write('<table class="table-striped table-bordered view">\n');
    res.write('<tr><td>Id</td><td>' + id + '</td></tr>\n');
    res.write('<tr><td>Name</td><td>' + customer.name + '</td></tr>\n');
    res.write('</table>\n');
    doFooter(res);
    res.end();
}

function doCustomerList(req, res)
{
    doHeader(res, 'Customers');
    res.write('<div class="btn-group actions">\
<a class="btn btn-primary" href="/customer/new">New Customer</a>\
</div>');
    
    res.write('<table class="table-striped table-bordered list">\n');
    res.write('<tr><th>Id</th><th>Name</th></tr>\n');
    
    customers.forEach(function(customer) {
        res.write('<tr>\n');
        res.write('<td><a href="/customer/view?id=' + customer.id + '">' + customer.id + '</a></td>\n');
        res.write('<td>' + customer.name + '</td>\n');
        res.write('</tr>\n');
    });
    
    res.write('</table>\n');
    
    doFooter(res);
    res.end();
}

function doCustomerNew(req, res)
{
    doHeader(res, 'New Customer');
    
    res.write('<form action="/customer/newprocess" method="post">\n');
    res.write('<fieldset>\n');
    res.write('<legend>Name</legend>\n');
    res.write('<div><input name="name"></div>\n');
    
    res.write('</fieldset>\n');

    res.write('<input type="submit" value="Submit"/>\n');
    res.write('</form>\n');
    
    doFooter(res);
    res.end();
}

function doCustomerNewProcess(req, res)
{
    maxid++;
    var customer = { id: maxid, name:  req.body.name };
    customers.push(customer);
    res.writeHead(302, { 'Location': '/customer' });
    res.end();
}

var app = simpleweb();

app.use(simpleweb.query());
app.use(simpleweb.post());
app.use(app.router);
app.use(simpleweb.static(path.join(__dirname, 'public')));
app.get('/', doHome);
app.get('/customer', doCustomerList);
app.get('/customer/new', doCustomerNew);
app.get('/customer/view', doCustomerView);
app.get('/customer/newprocess', doCustomerNewProcess);

var server = http.createServer(app).listen(8000);

console.log('listening to http://localhost:8000');
