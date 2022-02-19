const starkbank = require('starkbank');
require('dotenv').config();


let privateKeyContent = `
-----BEGIN EC PARAMETERS-----
${process.env.EC_PARAMS}
-----END EC PARAMETERS-----
-----BEGIN EC PRIVATE KEY-----
${process.env.EC_PRIVATE_KEY}
-----END EC PRIVATE KEY-----
`;

let project = new starkbank.Project({
    environment: 'sandbox',
    id: `${process.env.PROJECT_ID}`,
    privateKey: privateKeyContent
});


module.exports = project;

