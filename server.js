const express = require('express');
const starkbank = require('starkbank')

const project = require('./src/config/config')
const setTimeAndTransfer = require('./src/controllers/setTimeAndTransferController')


const app = express();

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

starkbank.user = project;


setTimeAndTransfer();
