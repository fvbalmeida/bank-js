const createInvoice = require('./createInvocesController');
const createTransfer = require('./createTransfersController')

const setTimeAndTransfer = function () {

    let timer = setInterval(() => createInvoice(), 10800000);

    setTimeout(() => {
        clearInterval(timer);
        createTransfer();
    }, 90000000);
}

module.exports = setTimeAndTransfer;