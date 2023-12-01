const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
    res.json({
        message: 'OK'
    })
})

app.use('/customers', router)

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