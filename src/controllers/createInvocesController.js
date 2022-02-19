const starkbank = require('starkbank');

const customers = require('../models/customersModel');


async function createInvoice() {
    try {
        for (let i = 0; i < 5; i++) {

            let randomAmount = Math.floor(Math.random() * 15000) + 1000;
            let randomNumber = Math.floor(Math.random() * 10);

            await starkbank.invoice.create([
                {
                    amount: randomAmount,
                    expiration: 123456789,
                    fine: 0,
                    interest: 0,
                    name: customers[randomNumber].name,
                    taxId: customers[randomNumber].taxId
                }
            ])
        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { createInvoice };