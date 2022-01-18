const axios = require('axios');

const http = {};

http.coinMarketAPI = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/',
    headers: {
        'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_API_KEY
    },
});

http.etherScanAPI = axios.create({
    baseURL: 'https://api.etherscan.io/api'
});


http.infuraAPI = axios.create({
    baseURL: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_SECRET_KEY}`
});
module.exports = http

