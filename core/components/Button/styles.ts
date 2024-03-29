import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
    width?: string;
    fontSize?: string;
    marginTop?: string;
}

export const StyledButton = styled(motion.button)<ButtonProps>`
    background-color: rgb(244, 245, 246);
    color: rgb(89, 96, 115);
    width: ${props => props.width || '52px'};
    height: 52px;
    padding: 10px 11px 10px 11px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: ${props => props.fontSize || '19px'};
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    margin-top: ${props => props.marginTop || '0px'};
    padding-bottom: 8px;
    
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

    @media (max-width: 768px) {
        width: ${props => props.width || '40px'};
        height: 44px;
        padding: 8px 9px 8px 9px;
        font-size: 16px;
    }
`;