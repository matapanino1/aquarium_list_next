import React from 'react';
import Head from 'next/head';
import Hero from '../components/blog-page/hero';

const HomePage = () => {
  return (
      <>
          <Head>
              <title>Aquarium Info -ホーム</title>
              <meta name="description" content="本格的な水族館情報をまとめているサイトです。" />
          </Head>
          <Hero />
     </>
  )
}

export default HomePage;