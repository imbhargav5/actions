require('dotenv').config();
const getEntries = require("./getEntries");
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;   

const content_type = 'speaking'
        
getEntries({
    space,
    accessToken
}, {
    content_type,        
}).then(response => {
    console.log(response);
});