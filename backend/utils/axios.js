const axios = require('axios');

module.exports = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/',
    headers: {
        'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_API_KEY
    },
});