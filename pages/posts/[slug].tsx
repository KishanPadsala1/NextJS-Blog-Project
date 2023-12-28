import React, { Fragment } from "react";
import PostContent from "@/components/posts/post-detail/post-content";
import { GetStaticProps } from "next";
import fs, { readdirSync } from 'fs';
import path from "path";
import matter from "gray-matter";
import { postData } from "@/types";
import Head from "next/head";

const PostDetailPage = ({post}: {post: postData}) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params!;
  const postDirectory = path.join(process.cwd(), "posts");

  function getPostData(postIdentifier: any) {
    const postSlug = postIdentifier.replace(/\.md$/, "");

    const filePath = path.join(postDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const postData: any = {
      slug: postSlug,
      ...data,
      content,
    };

    return postData;
  }
  const postData = getPostData(slug);

  return{
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export const getStaticPaths = () => {
  const postDirectory = path.join(process.cwd(), "posts");
  const postFilenames = fs.readdirSync(postDirectory);

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
