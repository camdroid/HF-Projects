var express 		= require('express');
var bodyParser		= require("body-parser");
var app				= express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

var pg = require('pg');
var connectionString = 'postgres://localhost:5432/todo';


var client = new pg.Client(connectionString);
client.connect();

//// var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
//// query.on('end', function() { client.end(); });

// app.post('/api/v1/todos', function(req, res) {
app.post('/api/v1/todos', function(req, res) {
	console.log('Got post request');
	var results = [];

	// Grab data from http request
	console.log('Req: '+req);
	var data = {text: req.body.text, complete: req.body.complete};

	// Get a Postgres client from the connection pool
	pg.connect(connectionString, function(err, client, done) {

		// SQL Query > Insert Data
		client.query("INSERT INTO items(text, complete) values($1, $2)", [data.text, data.complete]);

		// SQL Query > Select Data
		var query = client.query("SELECT * FROM items ORDER BY id ASC");

		// Stream results back one row at a time
		query.on('row', function(row) {
			results.push(row);
		});

		// After all data is returned, close connection and return results
		query.on('end', function() {
			client.end();
			return res.json(results);
		});

		// Handle Errors
		if(err) {
		  console.log(err);
		}
	});
});

app.get('/api/v1/todos', function(req, res) {

	var results = [];

	// Get a Postgres client from the connection pool
	pg.connect(connectionString, function(err, client, done) {

		// SQL Query > Select Data
		var query = client.query("SELECT * FROM items ORDER BY id ASC;");

		// Stream results back one row at a time
		query.on('row', function(row) {
			results.push(row);
		});

		// After all data is returned, close connection and return results
		query.on('end', function() {
			client.end();
			return res.json(results);
		});

		// Handle Errors
		if(err) {
		  console.log(err);
		}
	});
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});