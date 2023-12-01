const express = require('express')
const router = express.Router()
const service = require('../service')

router.get('/', async function (req, res, next) {
    try {
        res.json(await service.getAllCustomers(req.query.page))
    } catch (error) {
        console.error('Error while getting all customers', error.message)
        next(error)
    }
})

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await service.getSingleCustomers(req.params.id))
    } catch (error) {
        console.error('Error while getting single customers', error.message)
        next(error)
    }
})

router.post('/', async function (req, res, next) {
    try {
        res.json(await service.createCustomers(req.body))
    } catch (error) {
        console.error('Error while adding customers', error.message)
        next(error)
    }
})
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await service.deleteCustomers(req.params.id))
    } catch (error) {
        console.error('Error while deleting customers', error.message)
        next(error)
    }
})

router.put('/:id', async function (req, res, next) {
    try {
        res.json(await service.editCustomers(req.params.id, req.body))
    } catch (error) {
        console.error('Error while editing customers', error.message)
        next(error)
    }
})

module.exports = router