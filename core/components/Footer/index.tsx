import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #000;
    color: #fff;
    text-align: center;
    width: 100%;
    margin-top: 7rem;
`;

const Box = styled.div`
    width: 50%;
    height: 100%;
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    gap: 50px;
`;

const NavigationLinks = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

`;

const Footer = () => {
    return (
        <StyledFooter>
            <Box>
                <NavigationLinks>
                    <li>
                        <a href="https://www.linkedin.com/in/eliot-memaj-0b0b3b1b1/">LinkedIn</a>
                    </li>
                </NavigationLinks>
                <span>© {new Date().getFullYear()} Eliot Memaj - United Kingdom</span>
            </Box>
        </StyledFooter>
    );
}
 
export default Footer;