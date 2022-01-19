import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 0;
    padding: .5rem;
    border: 1px solid #ccc;
    border-radius: .5rem;
    background-color: transparent;
    cursor: pointer;
    display: inline-block;
    // font-weight: bolder;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
        -o-transition: all .5s ease;
            transition: all .5s ease;
    &:hover {
        border-color: rgba(0, 0, 0, .35);
	    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    }
    $:focus {
        border-color: rgba(0, 0, 0, .35);
	    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    }
`;

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
    onClick: any;
    disabled?: boolean;
}

export default function ButtonComponent(props: Props) {
    const {style, children, onClick, disabled} = props
    return (
        <Button onClick={onClick} style={style ? style : {}} disabled={disabled}>
            {children}
        </Button>
    )
}
