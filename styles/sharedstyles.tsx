import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  max-width: 1024px;
  width: 100%;
  padding: 3.5rem 2.5rem 4.5rem 2.5rem;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem 3rem 1rem;
  }

  @media (max-width: 480px) {
      padding: 1rem 0.5rem 2rem 0.5rem;
  }

  @media (max-width: 320px) {
      padding: 0.5rem 0.25rem 1rem 0.25rem;
  }
`;

export { Container, Main }
