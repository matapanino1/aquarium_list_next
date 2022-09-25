import React from "react";
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import MediaCard from "../components/blog-page/Card";

const Blog = ({ allPostsData }) => {
  return (
    <ul>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <MediaCard>
          <Link href={`/posts/${id}`}>
          <a>{title}</a>
          </Link>
          <br />
            {date}
            </MediaCard>
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
