const config = require('config')
const mysql = require('mysql2');
const util = require('util');
const host = config.get('mysql.host')
const port = config.get('mysql.port')
const user = config.get('mysql.user')
const password = config.get('mysql.password')
const db = config.get('mysql.database')

// Create connection
const connection = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: db,
  });
// Open connection
async function connect(){ 
    await connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });
}

  module.exports = { connect, connection};

  // OR USE POOL
// const pool = mysql.createPool({
//     host: host,
//     user: user,
//     password: password,
//     database: db,
//     waitForConnections: true,
//     connectionLimit: 10,
//     maxIdle: 10,
//     idleTimeout: 60000,
//     queueLimit: 0,
//   });
//     module.exports = pool;