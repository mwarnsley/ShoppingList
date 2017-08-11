'use strict';
// Creating the global variables to use
var express = require('express');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

// Using the static path for the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Get the root path to send the index.html file to
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Listen on the port specified for the server
app.listen(port, () => {
  console.log(`Application listening on port: ${port}`);
});
