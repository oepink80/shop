import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';
import React, { useState, useEffect } from 'react';

// Интерфейс поста (аналог новости)
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Карточка новости
const NewsCard = ({ post }: { post: Post }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '1rem', width: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

const NewsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${page}`,
      );
      const data = await response.json();

      setPosts((prevPosts) => [...prevPosts, ...data]); // Добавляем новые записи к существующим
      setLoading(false);
    } catch (err) {
      console.error('Ошибка при загрузке данных:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      setPage(page + 1);
      fetchPosts();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, page]);

  return (
    <Box m={4}>
      <Typography variant="h4" align="center">
        Последние новости
      </Typography>

      {/* Список карточек новостей */}
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}

      {loading && <CircularProgress />}
    </Box>
  );
};

export default NewsPage;
