const express = require('express');
const routes = express.Router();

const receiveAndTransferController = require('../controllers/receiveAndTransferController')


routes.post('/invoicewebhook', receiveAndTransferController.receiveAndTransfer);

module.exports = routes;
