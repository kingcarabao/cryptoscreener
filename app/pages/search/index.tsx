import React, { useState } from 'react';
import { localHttp } from '../../utils/axios';
// Hooks
import useDebounce from '../../hooks/useDebounce'
// Components
import CurrencyItem from '../../components/Currency/CurrencyItem';
import { Container, Input } from '../../components/UI';

export default function Dashboard() {
    const [currency, setCurrency] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [loadingContract, setLoadingContract] = useState(false);
    const [searchByTicker, setSearchByTicker] = useState('usdt');
    const [contractToken, setContractToken] = useState<any>(null);
    const debounce = useDebounce(fetchCurrencies);

    /**
     * Get currencies from our backend api
     * Needs search ticker keyword for api to filter results
     */
    async function fetchCurrencies() {
        setLoading(true)
        try {
            const response = await localHttp.get(`myapi/cryptocurrency`, { params: { ticker: searchByTicker } });
            setCurrency(response.data);
        } catch (error) {
            alert(error)
        }
        setLoading(false)
    };

    /**
     * This renders the list of currencies from api.
     * Has loading
     */
    function RenderCoin() {
        function renderData () {
            return currency ? CurrencyItem({...currency, fetchContractToken, contractToken}) : null
        }

        return loading ? "Loading..." : renderData()
    }

    async function fetchContractToken (address: string) {
        setLoadingContract(true)
        try {
            const response = await localHttp.get(`myapi/contract-token`, { params: { address } });
            setContractToken(response.data);
        } catch (error) {
            alert(error)
        }
        setLoadingContract(false)
    }

    return (
        <Container>
            <h1>Pluto Digital Technical Screener</h1>
            <Input
                label="Search Currency via Ticker"
                type="text"
                placeholder="eg. BTC"
                value={searchByTicker}
                onChange={(e: any ) => {
                    e.preventDefault();
                    setSearchByTicker(e.target.value);
                    debounce(e.target.value);
                }}
            />
            {RenderCoin()}
        </Container>
    )
}