import React from 'react';
import { StyledButton } from './styles';

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
};

const Button: React.FC<Props> = ({children, onClick, ...rest}) => {
    return (
        <StyledButton 
            onClick={onClick}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}
 
export default Button;