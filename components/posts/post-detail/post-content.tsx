import React from "react";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import { PrismLight } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import classes from "./post-content.module.css";
import Image from "next/image";
import { postData } from "@/types";

PrismLight.registerLanguage('js', js);
PrismLight.registerLanguage('css', css);

const PostContent = ({post}: {post: postData}) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const MarkdownComponent: object = {
    img: (image: { src: string; alt: string }) => {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    code: ({ children }: { children: string }) => {
      return (
        <PrismLight
          style={atomDark}
          language="javascript"
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={MarkdownComponent}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
