const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const api = require('../api/routes');
const path = require('path');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use(cors());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "../client", "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
});
app.use('/api', api);

app.get('/', function (req, res) {
  res.send('hello world');
});

const port = process.env.port || 4005;
console.log("Server running on port " + port);