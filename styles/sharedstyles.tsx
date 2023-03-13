import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
  max-width: 1024px;
  width: 100%;
  padding: 10rem 0 0 0;
  flex: 1;
`;

export { Container, Main }
