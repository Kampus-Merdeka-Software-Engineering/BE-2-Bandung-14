const db = require('./db')
const helper = require('../helper')
const config = require('../config')

async function getAllCustomers(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage)
    const data = await db.query(
        `SELECT * FROM customers LIMIT ${offset}, ${config.listPerPage}`
    )
    const result = helper.isEmpty(data)
    const meta = {
        page
    }

    if (data.length) {
        return {
            ...helper.requestSuccess('Success get all customers', false, result)
        }
    } else {
        return {
            ...helper.requestFail('Fail to get all customers')
        }
    }
}
