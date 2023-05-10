import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
    width: 100%;
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 576px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;

    li {
        width: 100%;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media (min-width: 768px) {
        li {
            width: 100%;
            height: 500px;
        }
    }
`;

const Projects = () => {
    return (
        <Section>
            <Heading>Projects</Heading>

            <List>
                <li>
                    <Link href="/projects/nextjs-portfolio">
                        <img 
                            src="/workspaces/Elxrin/public/muture.png" 
                            alt="muture" 
                        />
                    </Link>
                </li>
            </List>
        </Section>
    );
}
 
export default Projects;