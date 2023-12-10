// import library express js
const express = require('express');
const app = express(); // call function express

const cors = require('cors');

// import bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

// import database
const db = require('./config/db.js');
const { createcustomer, Customers } = require('./model/model.js');

 

app.get('/all', async (req, res) => {
  try {
    // Retrieve all customers from the database
    const allCustomers = await Customers.findAll();

    // Send the customer data as a JSON response
    res.status(200).json({ success: true, data: allCustomers });
  } catch (error) {
    // Handle errors and send an error response back to the client
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


// GET data terakhir di post
app.get('/customers/confirm', async (req, res) => {
  try {
    const latestItem = await getLatestCustomers();
    if (!latestItem) {
      res.status(404).json({ error: 'Data tidak ditemukan' });
    } else {
      res.json(latestItem);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
  }
});


// GET berdasarkan mobile_number
app.get('/check-id/:mobile_number', async (req, res) => {
  try {
    const id = req.params.mobile_number;
    const item = await getCustomersById(id);
    if (!item) {
      res.status(404).json({ error: 'Data tidak ditemukan' });
    } else {
      res.json(item);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
  }
});


// Function to get a Customer by mobile_number using findOne
const getCustomersById = async (mobile_number) => {
  try {
    const item = await Customers.findOne({
      where: { mobile_number },
    });
    return item;
  } catch (error) {
    throw error;
  }
};


app.post('/customers', async (req, res) => {
    try {
      const customerData = req.body;

      console.log("Received Data: ", customerData)
    // Call the createCustomer function from the model
    const createdCustomer = await createcustomer(customerData);
    res.status(201).json({ success: true, data: createdCustomer });
      
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Terjadi kesalahan saat menambahkan item' });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
