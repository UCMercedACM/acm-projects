const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const api = require('../api/routes');

var app = express();

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use('/api', api);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(4000, function() {
  console.log('Connected to Server!...');
});