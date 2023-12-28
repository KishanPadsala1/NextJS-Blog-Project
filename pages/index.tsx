import React, { Fragment } from "react";
import Hero from "@/components/home-page/home";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { postData } from "@/types";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from "next/head";

const HomePage = ({posts}: {posts: postData[]}) => {
  return (
    <Fragment>
      <Head>
        <title>Adam's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const postDirectory = path.join(process.cwd(), "posts");

  function getPostData(fileName: string) {
    const filePath = path.join(postDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, "");

    const postData: any = {
      slug: postSlug,
      ...data,
      content,
    };

    return postData;
  }

  function getAllPosts() {
    const postFiles = fs.readdirSync(postDirectory);

    const allPosts = postFiles.map((postFile) => getPostData(postFile));

    const sortedPosts = allPosts.sort((postA, postB) =>
      postA.date > postB.date ? -1 : 1
    );

    return sortedPosts;
  }

  function getFeaturedPosts() {
    const allPosts = getAllPosts();
  
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
  
    return featuredPosts;
  }

  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;
