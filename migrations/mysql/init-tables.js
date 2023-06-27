const util = require('util');
const mySqlConnection = require('./connect');
const connection = mySqlConnection.connection;
const express = require('express')
const app = express()

mySqlConnection.connect();

connection.query = util.promisify(connection.query);
(async () => {
    try {
      await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id int auto_increment,
          username varchar(255) not null,
          password varchar(255) not null,
          primary key (id)
        )    
      `);
      console.log("created table users!");

      await connection.query(`
      CREATE TABLE IF NOT EXISTS symbols (
        id int auto_increment,
        user_id int not null,
        symbol varchar(3) not null,
        primary key (id)
      )    
    `);
    console.log("created table symbols!");
    } catch (e) {
      console.log(e);
    }
  })();


