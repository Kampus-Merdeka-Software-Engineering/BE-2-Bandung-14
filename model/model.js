const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Customers = db.define('customers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  check_in: Sequelize.DATE,
  check_out: Sequelize.DATE,
  adults: Sequelize.INTEGER,
  childrens: Sequelize.INTEGER,
  room: Sequelize.STRING,
  address: Sequelize.STRING,
  mobile_number: Sequelize.STRING,

});

// Sync the model with the database (assuming 'db' is your Sequelize instance)
db.sync();

const createcustomer = async (item) => {
  
    try {
      
      // Jika id unik, simpan pelanggan ke database
      const createdItem = await Customers.create(item)
  
      return createdItem.toJSON();
    } catch (error) {
      throw error;
    }
  };

module.exports = { createcustomer, Customers };