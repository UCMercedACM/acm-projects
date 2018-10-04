const express = require('express');
const router = express.Router();
const mongoDB = require('mongodb');
const mainDB = require('./db').main;

// console.log(mainDB);

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.log('api accessed');
  res.send(JSON.stringify({
    success: true,
    page: 'api'
  }));
});

router.get('/projects', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  
  const project = req.body.mainDB.projects;
  res.send(project);
});

module.exports = router;