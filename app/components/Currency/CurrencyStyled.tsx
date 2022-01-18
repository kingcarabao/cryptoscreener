import styled from 'styled-components';

// Refactor
export const Info = styled.div`
    &>*{
        margin: 0;
    }
`;

export const Rank = styled.span`
    border-radius: .5rem;
    background-color: #333;
    color: #fff;
    padding: .5rem;
    font-size: .75rem;
    display: inline-block;
    margin-bottom: .5rem;
`;

export const Name = styled.h3`
    margin-bottom: .5rem;
    display: flex;
    gap: 12px;
`;

export const Price = styled.h2`
    margin-bottom: .5rem;
`;

export const Detail = styled.p`
    margin-bottom: .5rem;
`;

export const CurrencyLogo = styled.img`
    width: 24px;
`;

export const Divider = styled.hr`
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    margin: 1rem 0
`;

export const Accordion = styled.details`
    margin-bottom: .5rem;
    &>summary{
        border: none;
        border-radius: .5rem;
        padding: .5rem;
        display: block;
        background: #eee;
        padding-left: 2.2rem;
        position: relative;
        cursor: pointer;
    }
    &>details {
        margin-top: 5px;
        background: white;
    }
    &>details summary::-webkit-details-marker {
        display:none;
    }
    &>summary:before {
        content: '';
        border-width: .4rem;
        border-style: solid;
        border-color: transparent transparent transparent #aaa;
        position: absolute;
        top: .8rem;
        left: 1rem;
        transform: rotate(0);
        transform-origin: .2rem 50%;
        transition: .25s transform ease;
    }
`;