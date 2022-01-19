import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 1rem;
    margin-bottom: .5rem;
`;

const Input = styled.input`
    font-weight: bolder;
    font-size: 1rem;
    position: relative;
    margin-top: .5rem;
    width: 100%;
    border: none;
    border-radius: .5rem;
    border: 2px solid rgba(0, 0, 0, .15);
    padding: 1rem;
    box-shadow: none;
    outline: none;
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
    label: string;
    style?: React.CSSProperties;
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputComponent(props: Props) {
    const inputProps = {
        type: props.type ? props.type : '',
        placeholder: props.placeholder ? props.placeholder : '',
        value: props.value,
        onChange: props.onChange
    }
    return (
        <Label> {props.label}
            <Input {...inputProps} />
        </Label>
    )
}
