const starkbank = require('starkbank');

const customers = require('../models/customersModel');


const createInvoice = async () => {

    for (let i = 0; i < 10; i++) {

        let randomAmount = Math.floor(Math.random() * 15000) + 1000;
        let randomNumber = Math.floor(Math.random() * 10);

        const invoices = await starkbank.invoice.create([
            {
                amount: randomAmount,
                expiration: 123456789,
                fine: 0,
                interest: 0,
                name: customers[randomNumber].name,
                taxId: customers[randomNumber].taxId
            }
        ]);

        for (let invoice of invoices) {
            console.log(invoice);
        };

    }
}

module.exports = createInvoice;