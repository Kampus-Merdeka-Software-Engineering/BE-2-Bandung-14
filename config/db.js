const Sequelize = require("sequelize");
const db = new Sequelize("customer", "root", "", {
  host: "",
  dialect: "mysql",
  port:"3306",

});

// import env from 'dotenv';
// const dotenv = require('dotenv');
// dotenv.config();

// import sequelize
// const { Sequelize } = require('sequelize');

// Sequelize connection
// const db = new Sequelize(
//     process.env.MYSQLDATABASE,
//     process.env.MYSQLUSER,
//     process.env.MYSQLPASSWORD,
//     {
//         dialect: 'mysql',
//         host: process.env.MYSQLHOST,
//         port: process.env.MYSQLPORT,
//         define: {
//             timestamps: false,
//         },
//     }
// );

db.authenticate()
  .then(() => {
    console.log('Connected to MySQL');
  })
  .catch((err) => {
    console.error('Error connecting to MySQL:', err);
  });

module.exports = db;