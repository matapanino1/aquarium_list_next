import React from 'react';
import Head from 'next/head';
import Container from '../components/aquarium-list/Container';

const List = () => {
  return (
      <>
          <Head>
              <title>日本全国水族館リスト</title>
              <meta name="description" content="日本全国にある水族館をリスト化しました。旅先で遊ぶ場所に迷った時の参考にどうぞ。" />
          </Head>
          <Container />
      </>
  )
}

export default List;