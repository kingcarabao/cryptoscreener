import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: .5rem;
    display: flex;
    flex-wrap: wrap;

    & > * {
        width: 100%;
    }
`;

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function CardComponent(props: Props) {
    const {style, children} = props
    return (
        <Card style={style ? style : {}}>
            {children}
        </Card>
    )
}
