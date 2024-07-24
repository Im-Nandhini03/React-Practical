import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: 'technology',
            apiKey: '4b713ccb61414a8596cd8127393087cf',
            page: page,
            pageSize: pageSize,
          },
        });
        setPosts(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2><Link to={`/post/${index}`}>{post.title}</Link></h2>
          <p>{post.description}</p>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
      ))}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default BlogPostList;
