import React from 'react';
import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
      <section className={classes.hero}>
              <h1>Aquarium Info</h1>
          <p>本格的な水族館情報を提供いたします。</p><br />
              <p>旅行の行き先決定やデートの話題収集の参考になる記事を投稿して参ります。</p>
    </section>
  )
}

export default Hero;