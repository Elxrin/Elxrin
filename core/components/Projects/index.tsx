import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.div`
    width: 100%;
`;

const Projects = () => {
    return (
        <Section>
            <h2>Projects</h2>

            <ul>
                <li>
                    <Link href="/projects/nextjs-portfolio">
                        <p>testing</p>
                    </Link>
                </li>
            </ul>
        </Section>
    );
}
 
export default Projects;