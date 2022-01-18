import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: .5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: .5rem;
    background-color: #28a745;
    color: #fff;
    cursor: pointer;
    font-weight: bolder;
`;

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
    onClick: Function;
}

export default function ButtonComponent(props: Props) {
    const {style, children, onClick} = props
    return (
        <Button onClick={onClick} style={style ? style : null}>
            {children}
        </Button>
    )
}
