export interface Price {
    quote: { USD: { price: number } };
}

export interface Platform {
    name: string;
    symbol: string;
}

export interface Meta {
    logo: string;
    category: string;
    contract_address: { contract_address: string, platform: {coin: { name: string }, name: string} }[];
}

export interface Currency {
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
    contractToken: unknown;
}