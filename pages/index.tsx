import Head from 'next/head'
import { Container, Main } from '../styles/sharedstyles';

import Header from '../core/components/Header';
import Hero from '../core/components/Hero';
import Projects from '../core/components/Projects';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Personal Portfolio" />
      </Head>
      <Main>
        <Header/>
        <Hero/>
      </Main>
    </Container>
  )
}
