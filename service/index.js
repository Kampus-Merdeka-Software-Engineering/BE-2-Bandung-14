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

async function getSingleCustomers(id) {
    const data = await db.query(
        `SELECT * FROM customers where id=${id}`
    )
    const result = helper.isEmpty(data)

    if (data.length) {
        return {
            ...helper.requestSuccess('Success get single customers', false, result)
        }
    } else {
        return {
            ...helper.requestFail('Fail to get single customers')
        }
    }
}

async function createCustomers(data) {
    const result = await db.query(
        `INSERT INTO customers (first_name, last_name, check_in, check_out, adults, childrens, room, mobile_phone, transfer) VALUES ('${data.first_name}','${data.last_name}','${data.check_in}','${data.check_out}','${data.adults}','${data.childrens}','${data.room}','${data.mobile_phone}','${data.transfer}')`
    )

    let message = 'Error in adding customers'

    if (result.affectedRows) {
        message = 'Success in adding customers'
        return {
            ...helper.requestSuccess(message, true)
        }
    } else {
        return {
            ...helper.requestFail('Fail to get add customers')
        }
    }
}

async function deleteCustomers(data) {
    const result = await db.query(
        `DELETE FROM Customers WHERE id=${id}`
    )

    let message = 'Error in deleting customers'

    if (result.affectedRows) {
        message = 'Success in deleting customers'
        return {
            ...helper.requestSuccess(message, true)
        }
    } else {
        return {
            ...helper.requestFail('Fail to delete customers')
        }
    }
}

async function editCustomers(id,data) {
    const result = await db.query(
        `UPDATE customers SET first_name='${data.first_name}',last_name='${data.last_name}',check_in='${data.check_in}',check_out='${data.check_out}',adults='${data.adults}',childrens='${data.childrens}',room='${data.room}',mobile_phone='${data.mobile_phone}',transfer='${data.transfer}' WHERE id='${id}'`
    )

    let message = 'Error in editing customers'

    if (result.affectedRows) {
        message = 'Success in editing customers'
        return {
            ...helper.requestSuccess(message, true)
        }
    } else {
        return {
            ...helper.requestFail('Fail to get edit customers')
        }
    }
}

module.exports = {
    getAllCustomers,
    getSingleCustomers,
    createCustomers,
    deleteCustomers,
    editCustomers
}