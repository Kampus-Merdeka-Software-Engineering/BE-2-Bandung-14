require('dotenv').config()

const config = {
    db: {
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        connectionTimeout: 60000
    },
    listPerPage: 10
}

module.exports = config