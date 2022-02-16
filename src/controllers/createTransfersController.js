const starkbank = require('starkbank');



const createTransfer = async () => {
    let balance = await starkbank.balance.get()
    totalAmount = balance.amount;

    let transfers = await starkbank.transfer.create([
        {
            amount: totalAmount,
            bankCode: '20018183',
            branchCode: '0001',
            accountNumber: '6341320293482496',
            accountType: "payment",
            taxId: '20.018.183/0001-80',
            name: 'Stark Bank S.A.'
        }
    ])

    for (let transfer of transfers) {
        console.log(transfer);
    }
};

module.exports = createTransfer;