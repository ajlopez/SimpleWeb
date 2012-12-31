
var simpleweb = require('../..'),
    path = require('path'),
    http = require('http');
    
var customers = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Google' },
    { id: 3, name: 'Microsoft' }
];

var maxid = 3;

function doHeader(res, title)
{
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<html><head><title>');
    res.write('CRUD Simple Sample: ' + title);
    res.write('</title>');
    res.write('<link rel="stylesheet" href="/css/bootstrap.css">');
    res.write('</head>');
    res.write('<body>');
    
    res.write('<div>');
    res.write('<a href="/">Home</a> ');
    res.write('<a href="/customer">Customers</a>');
    res.write('</div>');
    
    res.write('<h1>');
    res.write(title);
    res.write('</h1>');
}

function doFooter(res)
{
    res.write('</body>');
    res.write('</html>');
}

function doHome(req, res)
{
    doHeader(res, 'Home');
    res.write('<div>Simple CRUD sample, in-memory model.</div>');
    res.write('<div>Using Query String (no parameters in URL, or post processing, yet).</div>');
    res.write('<div>No static files.</div>');
    doFooter(res);
    res.end();
}

function doTBD(res)
{
    res.write('<div>[TBD]</div>\n');
}

function doCustomerView(req, res)
{
    doHeader(res, 'Customer');
    doTBD(res);
    res.end();
}

function doCustomerList(req, res)
{
    doHeader(res, 'Customers');
    res.write('<div class="btn-group">\
<a class="btn btn-primary" href="/customer/new">New Customer</a>\
</div>');
    
    res.write('<table class="table-striped table-bordered" style="min-width: 500px;">\n');
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
    
    res.write('<form action="/customer/newprocess" method="get">\n');
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
    var customer = { id: maxid, name:  req.query.name };
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
