import React from 'react';
import styled from 'styled-components';

const GridItem = styled.div`
    display: flex;
    flex-grow: 1;
`;

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function GridItemComponent(props: Props) {
    const {style, children} = props
    return (
        <GridItem style={style ? style : null}>
            {children}
        </GridItem>
    )
}
