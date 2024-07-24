import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post, index }) => (
  <div>
    <h2><Link to={`/post/${index}`}>{post.title}</Link></h2>
    <p>{post.description}</p>
    <p>{post.publishedAt}</p>
  </div>
);

export default BlogPostItem;
