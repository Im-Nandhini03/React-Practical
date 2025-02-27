import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';

const App = () => {
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

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
