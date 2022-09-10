import React from "react";
import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      {/* <Link href="/">
        <a>
          <Logo />
        </a>
      </Link> */}
      <nav>
        <ul>
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/blog">ブログ</Link>
          </li>
          <li>
            <Link href="/list">水族館一覧</Link>
          </li>
          <li>
            <Link href="/contact">ご意見</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
