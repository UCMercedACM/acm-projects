const mongoose = require('mongoose');
const {dbUsername, dbPassword} = require('./secrets');
const url = 'mongodb+srv://' + dbUsername + ':' + dbPassword + '@projects-dy3dy.gcp.mongodb.net';

module.exports.main = mongoose.createConnection(url + '/main', {useNewUrlParser: true});
