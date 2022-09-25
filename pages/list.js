import React from 'react';
import Head from 'next/head';
import Container from '../components/aquarium-list/Container';

const List = ({ data }) => {
  return (
      <>
          <Head>
              <title>Aquarium Info -水族館一覧</title>
              <meta name="description" content="日本全国にある水族館をリスト化しました。旅先で遊ぶ場所に迷った時の参考にどうぞ。" />
          </Head>
          <Container />
      </>
  )
}

export default List;