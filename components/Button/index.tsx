import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: rgb(244, 245, 246);
    color: rgb(89, 96, 115);
    padding: 10px 11px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 19px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;

    
    &:hover {
        color: rgb(32, 92, 232);
        border: 2px solid rgb(32, 92, 232);
        box-shadow: 0 0 10px 3px rgb(227, 234, 249);
    }

    &:disabled {
        background-color: #ccc;
        color: #fff;
        cursor: not-allowed;
    }

    &:active {
        color: rgb(32, 92, 232);
        border: 2px solid rgb(32, 92, 232);
        box-shadow: 0 0 10px 3px rgb(227, 234, 249);
    }
`;

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
};

const Button: React.FC<Props> = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
}
 
export default Button;