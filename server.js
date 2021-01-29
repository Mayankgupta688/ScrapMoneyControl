const cheerio = require('cheerio');
const axios = require("axios");

axios.get("https://economictimes.indiatimes.com/national-aluminium-company-ltd/stocks/companyid-11997.cms").then((response) => {

  console.log(response.data);

  const $ = cheerio.load(response.data);
  console.log($('.ltp').text());
})