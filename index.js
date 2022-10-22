const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');




const app = express();

const url = '##WEBSITE_NAME##
axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    console.log($)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
