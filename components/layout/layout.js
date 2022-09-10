import React from 'react';
import Footer from './Footer';

import MainNavigation from './main-navigation';

const Layout = (props) => {
  return (
      <>
          <MainNavigation />
          <main>{props.children}</main>
          <Footer />
    </>

  )
}

export default Layout;