import React from "react";
import PostItem from "./post-item";
import { postData } from "@/types";
import classes from "./posts-grid.module.css";

const PostsGrid = ({posts}: {posts: postData[]}) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}/>
      ))}
    </ul>
  );
};

export default PostsGrid;
