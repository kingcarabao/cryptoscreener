import React, { useState } from 'react';
import { localHttp } from '../../utils/axios';
// Hooks
import useDebounce from '../../hooks/useDebounce'
// Components
import CurrencyItem from '../../components/Currency/CurrencyItem';
import { Container, Input } from '../../components/UI';

export default function Dashboard() {
    const [currencies, setCurrencies] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [searchByTicker, setSearchByTicker] = useState('');
    const debounce = useDebounce(fetchCurrencies);

    /**
     * Get currencies from our backend api
     * Needs search ticker keyword for api to filter results
     */
    async function fetchCurrencies() {
        setLoading(true)
        try {
            const response = await localHttp.get(`myapi/cryptocurrency`, { params: { ticker: searchByTicker } });
            setCurrencies(response.data);
        } catch (error) {
            alert(error)
        }
        setLoading(false)
    };

    /**
     * This renders the list of currencies from api.
     * Has loading
     */
    function RenderCoinList() {
        function renderData () {
            return currencies && Array.isArray(currencies)
            ? currencies.map((currency) => CurrencyItem(currency))
            : null
        }

        return loading ? "Loading..." : renderData()
    }

    return (
        <Container>
            <h1>Pluto Digital Technical Screener</h1>
            <Input
                label="Search Currency"
                type="text"
                placeholder="eg. BTC"
                value={searchByTicker}
                onChange={(e: any ) => {
                    e.preventDefault();
                    setSearchByTicker(e.target.value);
                    debounce(e.target.value);
                }}
            />
            {RenderCoinList()}
        </Container>
    )
}