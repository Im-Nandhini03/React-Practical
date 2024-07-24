import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts[parseInt(id)];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostDetails;
