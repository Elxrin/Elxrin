import React from 'react';
import { StyledButton } from './styles';
import { buttonVariants } from '../../../shared/motion/variants';


interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    width?: string;
};

const Button: React.FC<Props> = ({children, onClick, width, ...rest}) => {
    return (
        <StyledButton 
            onClick={onClick}
            width={width}
            initial="initial"
            animate="animate"
            exit="exit"
            whileTap="tap"
            variants={buttonVariants}
        >
            {children}
        </StyledButton>
    );
}
 
export default Button;