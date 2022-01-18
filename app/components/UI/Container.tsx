import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 1rem;
`;

interface Props {
    children: React.ReactNode;
}

export default function CardComponent(props: Props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
