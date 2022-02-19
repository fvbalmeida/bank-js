const createInvoicesController = require('./createInvocesController');


const setTime = function () {

    let timer = setInterval(() => createInvoicesController.createInvoice(), 3000);

    setTimeout(() => {
        clearInterval(timer);
    }, 25000);
}

module.exports = { setTime };