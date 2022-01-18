import React from 'react'
import { Card } from '../UI';

interface CurrencyProps {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    platform: { name: string, symbol: string } | null
    quote: { USD: { price: number } };
    children?: React.ReactNode;
}

export default function CurrencyItem (props: CurrencyProps){
    const { id, name, symbol, rank, platform, quote } = props;
    return (
        <Card key={id} style={{ marginTop: '1rem' }}>
            <ul>
                <h6>Rank: #{rank}</h6>
                <h3>{name}</h3>
                <h3>{quote.USD.price}</h3>
                <h4>Blockchain: {platform ? platform.name : null}</h4>
                {/* {
                    Object.entries(props).map((item) => {
                        return <li key={item[0]}>{item[0]} <strong>{JSON.stringify(item[1])}</strong></li>
                    })
                } */}
            </ul>
        </Card>
    )
}
