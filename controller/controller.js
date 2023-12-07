// const { response } = require("express");
const { prisma } = require("../config/index")

async function getAllCustomers(req, res) {    
    try {
        const customer = await prisma.customer.findMany();
        res.status(200).json({
            success: true,
            message: "success get all customer",
            data: customer,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            
        })
    }
}

async function postCustomers(req, res) {    
    const { name } = req.body;
    try {
        await prisma.customer.create({
            data: {
                name
            }
        });
        res.status(201).json({
            success: true,
            message: "customer added",
            data: customer,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            
        })
    }
}

module.exports = {getAllCustomers, postCustomers};