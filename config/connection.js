// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("tmqv3amup6jkkprj", "nyendmi4wiw9w2oo", "d7cgj9zufurxojqv", {
  "username": "nyendmi4wiw9w2oo",
    "password": "d7cgj9zufurxojqv",
    "database": "tmqv3amup6jkkprj",
    "host": "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "port": 3306
});

// Exports the connection for other files to use
module.exports = sequelize;
