import React from 'react';
import { StyledButton } from './styles';

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    width: string;
};

const Button: React.FC<Props> = ({children, onClick, width, ...rest}) => {
    return (
        <StyledButton 
            onClick={onClick}
            width={width}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}
 
export default Button;