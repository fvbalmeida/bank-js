const starkbank = require('starkbank');

const createTransferController = require('./createTransfersController');


async function receiveAndTransfer(req, res) {
    try {
        let event = await starkbank.event.parse({
            content: req.body.toString(),
            signature: req.headers['digital-signature']
        });

        if (event.log.type === 'paid') {
            console.log('type ', event.log.type);

            let paidInvoiceAmount = event.log.invoice.amount;
            idd = event.log.invoice.id
            console.log('id ', idd)

            await createTransferController.createTransfer(paidInvoiceAmount);
            console.log(`conta ${idd} paga`)

        }
        res.status(200).json({ success: true }).end()
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ success: false, error: `${err.code} and ${err.message}` }).end()
    }
}

module.exports = { receiveAndTransfer };