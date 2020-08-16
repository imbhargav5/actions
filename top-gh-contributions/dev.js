require('dotenv').config();
const getTopContributions = require("./getTopContributions");
const token = process.env.TOKEN;
getTopContributions(token).then(response => {
    console.log(response);
});