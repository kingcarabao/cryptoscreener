const { Router } = require('express');
const { coinMarketAPI, etherScanAPI } = require('./utils/axios');

module.exports = app => {
    const router = Router();

    router.get('/', (req, res) => {
        res.send('this is pluto exam');
    });

    /**
     * GET cryptocurrency
     * endpoint for asset searching
     */
    router.get('/cryptocurrency', async (req, res) => {
        const ticker = req.query.ticker.toUpperCase();
        let result = {};
        let error;

        // get asset info
        try {
            const response = await coinMarketAPI.get('cryptocurrency/quotes/latest', { params: { symbol: ticker }});
            result = response.data.data[ticker];
        } catch (error) {
            error = error;
        }

        // more info
        try {
            const response = await coinMarketAPI.get('cryptocurrency/map', { params: { symbol: ticker }});
            result.map = response.data.data[0];
        } catch (error) {
            error = error;
        }

        // get price(qoute)
        try {
            const amount = 1; // Amount is 1 to get the base price of the digital asset
            const response = await coinMarketAPI.get('tools/price-conversion', { params: { symbol: ticker, amount: amount }});
            result.price = response.data.data;
        } catch (error) {
            error = error;
        }

        // metadata
        try {
            const response = await coinMarketAPI.get('cryptocurrency/info', { params: { symbol: ticker }});
            result.meta = response.data.data[ticker];
        } catch (error) {
            error = error;
        }
        
        error ? res.send(error) : res.send(result);
    });

    router.get('/contract-token', async (req, res) => {
        const address = req.query.address;
        let result;
        let error;
        let params = {
            module: 'contract',
            action: 'getabi',
            address: address,
            apikey: process.env.ETHER_SCAN_API_KEY
        }
        try {
            const response = await etherScanAPI.get('', { params });
            result = response.data.result;
        } catch (error) {
            error = error;
        }

        error ? res.send(error) : res.send(result);
    });

    app.use('/myapi', router)
};