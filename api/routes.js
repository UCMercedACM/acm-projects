const express = require('express');
const router = express.Router();
const mongoDB = require('mongodb');

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
  
  const projects = req.body.projects;
  res.send(projects);
});

module.exports = router;