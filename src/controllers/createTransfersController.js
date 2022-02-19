const starkbank = require('starkbank');


async function createTransfer(invoiceAmount) {
    try {
        await starkbank.transfer.create([
            {
                amount: invoiceAmount,
                bankCode: '20018183',
                branchCode: '0001',
                accountNumber: '6341320293482496',
                accountType: "payment",
                taxId: '20.018.183/0001-80',
                name: 'Stark Bank S.A.'
            }
        ]);
    }
    catch (err) {
        console.log(err)
    }
};

module.exports = { createTransfer };