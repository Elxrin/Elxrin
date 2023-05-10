import { Container, Box, Content } from './styles';
import Button from '../Button';

const Hero = () => {
    return (
        <Container>
            <Box>
                <Content>
                    Hello! I'm Eliot, UK based, a software developer working with Typescript and React. Focused on creating modern and scalable web solutions.
                </Content>


                <Button 
                    onClick={() => location.href = 'https://github.com/Elxrin'}
                    width="auto"
                >
                    About Me
                </Button>
            </Box>
        </Container>
    );
}
 
export default Hero;