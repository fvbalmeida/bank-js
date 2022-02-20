const starkbank = require('starkbank');

const createTransferController = require('./createTransfersController');


async function receiveAndTransfer(req, res) {
    try {
        let event = await starkbank.event.parse({
            content: req.body.toString(),
            signature: req.headers['digital-signature']
        });

        if (event.log.type === 'paid') {

            let paidInvoiceAmount = event.log.invoice.amount;

            await createTransferController.createTransfer(paidInvoiceAmount);

        }
        res.status(200).json({ success: true }).end()
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ success: false, error: `${err.code} and ${err.message}` }).end()
    }
}

module.exports = { receiveAndTransfer };
