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

// Function to get the latest Pengiriman
// const getLatestCustomers = async () => {
//   try {
//     const latestItem = await Pengiriman.findOne({
//       order: [['createdAt', 'DESC']],
//     });
//     return latestItem;
//   } catch (error) {
//     throw error;
//   }
// };

// GET berdasarkan id
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


// Integrasi ke FE
// app.post('/submit', (req, res) => {
//   const selectedValue = req.body.choice;

//   // Menangani POST request dari form
//   const dataToInsert = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     check_in: req.body.check_in,
//     check_out: req.body.check_out,
//     adults: req.body.adults,
//     childrens: req.body.childrens,
//     room: req.body.room,
//     address: req.body.address,
//     mobile_number: req.mobile_number
//   };

  // Simpan data radio button ke database
//   const query = 'INSERT INTO customer (room) VALUES (?)';
//   connection.query(query, [selectedValue], (err, results) => {
//     if (err) throw err;

//     console.log('Data berhasil disimpan ke database');
//     res.send('Data berhasil disimpan ke database');
//   });

//   const query1 = 'INSERT INTO nama_tabel SET ?';
//   connection.query(query, dataToInsert, (err, results) => {
//     if (err) {
//       console.error('Error executing query: ' + err.stack);
//       res.send('Error occurred while saving data to database');
//       return;
//     }
    
//     console.log('Data berhasil disimpan ke database');
//     res.send('Data berhasil disimpan ke database');
//   });
// });


// function setupCustomerForm() {
//   const form = document.getElementById("order-form");
//   console.log(form, "ini form");
//   form.addEventListener("submit", async function (event) {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const formProps = Object.fromEntries(formData);
//     console.log(formprops, "ini form props");
//     try {
//       const response = await fetch("http://localhost:3000/customers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formProps),
//       });
//       const data = await response.json();
//       console.log("Success:", data);
//     } catch (error) {
//       console.error("Error", error);
//     }
//   });
// }





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

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
app.listen(PORT, "0.0.0.0", function(){});