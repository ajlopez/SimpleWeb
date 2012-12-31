# SimpleWeb

Simple middleware layer for web applications, inspired by Connect and others. Work in Progress.

## Installation

Via npm using (Node.js)[http://nodejs.org]:
```
npm install simpleweb
```

## Usage

Reference in your program:
```js
var simpleweb = require('simpleweb');
```

A simple web server:
```js
var simpleweb = require('simpleweb'),
    http = require('http');

var app = simpleweb();

// Configuring middleware

app.use(simpleweb.query());
app.use(simpleweb.body());
app.use(app.router);
app.use(simpleweb.static(path.join(__dirname, 'public')));

// Configuring routes

app.get('/', function (req, res) { /* .... */ });
app.get('/customer', function (req, res) { /* .... */ });
app.get('/customer/new', function (req, res) { /* .... */ });
app.post('/customer/new', function (req, res) { /* .... */ });
app.get('/supplier', function (req, res) { /* .... */ });

// Launch the web server

var server = http.createServer(app).listen(8000);
```

TBD

## Development

```
git clone git://github.com/ajlopez/SimpleWeb.git
cd SimpleWeb
npm install
npm test
```

## Samples

[Static](https://github.com/ajlopez/SimpleWeb/tree/master/samples/static) Simple site with static pages.

[Customers](https://github.com/ajlopez/SimpleWeb/tree/master/samples/customers) Dinamic pages, in-memory repository.

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleWeb) and submit
[pull requests](https://github.com/ajlopez/SimpleWeb/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

