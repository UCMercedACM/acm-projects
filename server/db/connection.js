const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/messages';
const db = monk(connectionString);
console.log(db);

module.exports = db;