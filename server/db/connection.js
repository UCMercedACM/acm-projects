const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'mongodb://adarian:FM3arVXFWEyAotv2@projects-shard-00-00-dy3dy.gcp.mongodb.net:27017,projects-shard-00-01-dy3dy.gcp.mongodb.net:27017,projects-shard-00-02-dy3dy.gcp.mongodb.net:27017/main?ssl=true&replicaSet=Projects-shard-0&authSource=admin&retryWrites=true';
// const connectionString = process.env.MONGODB_URI || 'localhost/acmProjects';
const db = monk(connectionString);
console.log(db);

module.exports = db;