import React from 'react'
import PostsGrid from './posts-grid'
import { postData } from '@/types'
import classes from './all-posts.module.css';

const AllPosts = ({posts}: {posts: postData[]}) => {
  return (
    <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts}/>
    </section>
  )
}

export default AllPosts;