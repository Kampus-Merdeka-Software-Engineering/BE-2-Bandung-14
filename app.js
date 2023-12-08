const express = require('express')
require('dotenv').config()
const cors = require('cors')
const {prisma} = require("./config/prisma.config")
//const prisma = new PrismaClient();
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index.js')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
    res.json({
        message: 'OK'
    })
})

app.use('/v1/customers', router);

app.get('/v2/customers', async (req, res) => {
    const users = await prisma.customers.findMany();
    res.json(users);
  });

app.use((err, req, res, next) => {
    const status = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(status).json({
        message: err.message
    })
})

app.listen(port, "0.0.0.0", () => {
    console.log(`app is running on port ${port}`)
})