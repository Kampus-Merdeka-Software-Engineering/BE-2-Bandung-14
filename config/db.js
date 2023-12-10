
const Sequelize = require('sequelize');

const db = new Sequelize("postgres://vqhsiekh:059SS1-PbVqk2suYjkF49EtmDDkS3ajC@pom.db.elephantsql.com/vqhsiekh", {
  dialect: 'postgres',
  logging: false

});

module.exports = db;

db.authenticate()
  .then(() => {
    console.log('Connected to MySQL');
  })
  .catch((err) => {
    console.error('Error connecting to MySQL:', err);
  });

module.exports = db;
