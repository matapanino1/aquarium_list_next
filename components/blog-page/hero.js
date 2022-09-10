import React from 'react';

import classes from './hero.module.css';

const Hero = () => {
  return (
      <section className={classes.hero}>
              <h1>Aquarium Info</h1>
          <p>本格的な水族館情報を提供いたします。</p><br />
          <p>行く前に水族館の見どころを知りたい方、</p>
          <p>雰囲気を感じたい方、</p>
          <p>水族館愛好家の方も、</p>
          <p>誰でも楽しめる記事を投稿して参ります。</p>
    </section>
  )
}

export default Hero;