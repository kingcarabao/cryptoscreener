import React, { useState } from 'react';
import { localHttp } from '../../utils/axios';
import { Info, Rank, Name, Price, Detail, CurrencyLogo, Divider, Accordion, AccordionBody, ContractList, ContractListItem } from './CurrencyStyled';
import { Card, Button } from '../UI';

interface Price {
    quote: { USD: { price: number } };
}

interface Platform {
    name: string;
    symbol: string;
}

interface Meta {
    logo: string;
    category: string;
    contract_address: { contract_address: string, platform: {coin: any, name: string} }[];
}

interface CurrencyProps {
    id: string;
    name: string;
    symbol: string;
    map: { rank: string | number };
    is_active: boolean | number;
    platform: Platform | null
    price: Price;
    meta: Meta;
    total_supply: number | string;
    fetchContractToken: Function;
    children?: React.ReactNode;
    contractToken: any;
}

export default function CurrencyItem (props: CurrencyProps){
    const { id, name, symbol, map, platform, price, meta, is_active, total_supply, fetchContractToken, contractToken } = props;

    /**
     * checks if token is running in etherum blockchain
     */
    function isEthereumToken() {
        if (!platform)
            return false;
        else
            return platform.symbol === 'ETH'
    }

    /**
     * Messy. must break components
     */
    return (
        <Card key={id} style={{ marginTop: '1rem' }}>
            {
                id
                ?
                <Info>
                    <Rank>Rank: #{map ? map.rank : 'n/a'}</Rank>
                    <Name>
                        {
                            meta && meta.logo
                            ? <CurrencyLogo src={meta.logo} alt={`${name}-logo`}/>
                            : null
                        }
                        {name} ({symbol})
                    </Name>
                    <Price>${price ? price.quote.USD.price : 'Price Unavailable'}</Price>
                    <Divider />
                    <Detail>Platform: <strong>{platform ? platform.name : 'n/a'}</strong></Detail>
                    <Detail>Category: <strong>{meta ? meta.category : 'n/a'}</strong></Detail>
                    <Detail>Active: <strong>{is_active ? 'True' : 'False'}</strong></Detail>
                    {
                        isEthereumToken()
                        ?
                            <>
                                <Divider />
                                <h3 style={{ marginBottom: '1rem' }}>Ethereum token details:</h3>
                                {
                                    meta
                                    ?
                                    <>
                                        <Detail>Total Supply: <strong>{total_supply}</strong></Detail>
                                        <Accordion>
                                            <summary>Contract Address:</summary>
                                            <AccordionBody>
                                                <ContractList>
                                                    { meta.contract_address.map((address) => (
                                                        <ContractListItem key={address.contract_address}>
                                                            <Button
                                                                style={{ marginRight: '1rem' }}
                                                                onClick={() => fetchContractToken(address.contract_address)}
                                                                // disabled={!(address.platform.coin.symbol === 'ETH')}
                                                            >
                                                                View
                                                            </Button>
                                                            {address.platform.coin.name}: <strong>{address.contract_address}</strong>
                                                        </ContractListItem>
                                                    )) }
                                                </ContractList>
                                            </AccordionBody>
                                        </Accordion>
                                        <Detail>{JSON.stringify(contractToken)}</Detail>
                                    </>
                                    : null
                                }
                            </>
                        : null
                    }
                </Info>
                : 'No results found'
            }
            
        </Card>
    )
}
