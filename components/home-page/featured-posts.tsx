import React from 'react';
import PostsGrid from '../posts/posts-grid';
import { postData } from '@/types';
import classes from './featured-posts.module.css';

const FeaturedPosts = ({posts}: {posts: postData[]}) => {
  return (
    <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts;