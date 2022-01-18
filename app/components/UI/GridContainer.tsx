import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
    display: flex;
    background-color: ${(props: any) => props.bg}
`;

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function GridContainerComponent(props: Props) {
    const {style, children} = props
    return (
        <GridContainer style={style ? style : null}>
            {children}
        </GridContainer>
    )
}
