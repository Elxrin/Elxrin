import Head from 'next/head'
import { Container, Main } from '../styles/sharedstyles';

import Header from '../core/components/Header';
import Hero from '../core/components/Hero';
import Projects from '../core/components/Projects';
import Footer from '../core/components/Footer'

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
        <Projects/>
      </Main>
      <Footer/>
    </Container>
  )
}
