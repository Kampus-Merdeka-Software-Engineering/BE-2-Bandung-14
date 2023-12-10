// const Sequelize = require("sequelize");
// const db = new Sequelize("customer", "root", "", {
//   host: "127.0.0.1", //ini harus di isi
//   dialect: "mysql",
//   port:"3306",

// });
// config/db.js
const Sequelize = require('sequelize');

const db = new Sequelize("postgres://vqhsiekh:059SS1-PbVqk2suYjkF49EtmDDkS3ajC@pom.db.elephantsql.com/vqhsiekh", {
  dialect: 'postgres',
  logging: false
  // host: 'your_host_from_elephantsql',
  // username: 'vqhsiekh',
  // password: '059SS1-PbVqk2suYjkF49EtmDDkS3ajC ',
  // database: 'vqhsiekh',
  // port: '5432', // PostgreSQL port, replace with the correct MySQL port if different
});

module.exports = db;

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