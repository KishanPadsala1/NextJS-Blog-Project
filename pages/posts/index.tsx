import React, { Fragment } from "react";
import AllPosts from "@/components/posts/all-posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postData } from "@/types";
import Head from "next/head";

const AllPostsPage = ({ posts }: { posts: postData[] }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programmimg related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
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
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
