import React from "react";
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';

const Blog = ({ allPostsData }) => {
  return (
    <ul>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>
          <a>{title}</a>
          </Link>
          <br />
            {date}
        </li>
      ))}
    </ul>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
