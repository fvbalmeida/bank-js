const createInvoicesController = require('./createInvocesController');


const setTime = function () {

    let timer = setInterval(() => createInvoicesController.createInvoice(), 10800000);

    setTimeout(() => {
        clearInterval(timer);
    }, 90000000);
}

module.exports = { setTime };
