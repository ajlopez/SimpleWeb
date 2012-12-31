
var simpleweb = require('../..'),
    path = require('path'),
    http = require('http');

var app = simpleweb();
app.use(simpleweb.static(path.join(__dirname, 'public')));
http.createServer(app).listen(8000);
console.log("Listening on http://localhost:8000");

