import styled from 'styled-components';
import { motion } from 'framer-motion';

interface AppbarProps {
    open?: boolean;
    height?: string;
}

export const Appbar = styled(motion.div)<AppbarProps>`
    background-color: hsla(0, 0%, 100%, 0.5);
    height: ${props => props.height ? props.height : '60px'};
    max-width: 1024px;
    margin: 0 auto;
	position: fixed;
	top: 10px;
	left: 70px;
	right: 70px;
	border-radius: 10px;
	overflow: hidden;
	backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    border: 1px solid rgba(220, 235, 255, 0.5);
    padding: 5px 40px;

    div {
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

export const Box = styled.div`
    height: 47px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // height: fit-content;
    gap: 10px;
`;

export const Stack = styled.div`
    display: flex;
    gap: 10px;
`;

export const Testing = styled.div`
    background-color: yellow;
    height: 200px;
    width: 100%;
`;