import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    height: 100vh;

    @media (max-width: 768px) {
        height: 90vh;
    }

    @media (max-width: 576px) {
        height: 50vh;
    }
`;

export const Box = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10rem;

    @media (max-width: 768px) {
        padding-top: 8rem;
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }

    @media (max-width: 576px) {
        padding-top: 6rem;
    }
`;

export const Content = styled.h3`
    width: 90%;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 576px) {
        font-size: 1.5rem;
    }

    @media (max-width: 375px) {
        font-size: 1.2rem;
    }
`;