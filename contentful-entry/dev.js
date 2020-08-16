require('dotenv').config();
const getEntry = require("./getEntry");
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;   
        
getEntry({
    space,
    accessToken
}, '5dlinQLBEavklJ2oIvcbWz').then(response => {
    console.log(response);
});