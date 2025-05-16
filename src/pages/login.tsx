import { Button, TextField, Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@/hooks/auth.hook';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { loading, errorMessage, signIn } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn(formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Авторизация
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Имя пользователя"
          margin="normal"
          fullWidth
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          required
        />
        <TextField
          label="Пароль"
          type="password"
          margin="normal"
          fullWidth
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          disabled={loading}
        >
          Войти
        </Button>
      </form>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <Link to="/register" style={{ textDecoration: 'none', color: '#888' }}>
        Нет аккаунта? Зарегистрируйтесь!
      </Link>
    </Box>
  );
};

export default LoginPage;
