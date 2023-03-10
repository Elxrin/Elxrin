import Head from 'next/head'
import { Container, Main } from '../components/sharedstyles';

import Header from '../components/Header';
import Hero from '../components/Hero';

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
