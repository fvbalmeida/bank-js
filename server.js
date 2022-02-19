const express = require('express');
const starkbank = require('starkbank')
const bodyParser = require('body-parser')

const routes = require('./src/routes/routes')
const project = require('./src/config/starkConfig')
const setTimeController = require('./src/controllers/setTimeController')


const app = express();

app.use(express.raw({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

starkbank.user = project;

app.use(routes)

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

setTimeController.setTime();