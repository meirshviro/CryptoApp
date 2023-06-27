const config = require('config')
const mysql = require('mysql2');

// Create pool connection
const pool = mysql.createPool({
    host: config.get('mysql.host'),
    user: config.get('mysql.user'),
    password: config.get('mysql.password'),
    database: config.get('mysql.database'),
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0
  });

const dbConnect = async (req, res, next) => {
    req.db = pool
    res.status(200).send('Connected to mySQL!')
}
module.exports = dbConnect;