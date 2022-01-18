const { Router } = require('express');
const http = require('./utils/axios');

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
        const { ticker } = req.query;
        let result = [];
        let error;

        // endpoint just to asset info
        try {
            const response = await http.get('cryptocurrency/map', { params: { symbol: ticker }});
            result = [...response.data.data];
        } catch (error) {
            error = error;
        }

        // endpoint just to get price(qoute)
        let quote = {};
        try {
            const response = await http.get('tools/price-conversion', { params: { symbol: ticker, amount: 1 }});
            quote = response.data.data;
        } catch (error) {
            error = error;
        }

        // merge
        result.forEach((item) => {
            if (item.id === quote.id) {
                item.quote = quote.quote;
            }
        });
        
        error ? res.send(error) : res.send(result);
    });

    app.use('/myapi', router)
};