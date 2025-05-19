// src/app.tsx

import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from '@/components/layout/layout';
import { useAuth } from '@/hooks/auth.hook';
import ProtectedRoutes from '@/routes/protected';
import PublicRoutes from '@/routes/public';
import { RootState } from '@/types/types';

import Shoptheme from './themes/theme';

export const App = () => {
  const { initializing } = useAuth(); // Берём состояние инициализации
  const user = useSelector((state: RootState) => state.user);
  const loggedIn = Boolean(user);

  if (initializing) {
    return <div>Загрузка...</div>; // Или какой-то спиннер/экран ожидания
  }

  return (
    <ThemeProvider theme={Shoptheme}>
      <Router>
        <Container>
          <Layout>{!loggedIn ? <PublicRoutes /> : <ProtectedRoutes />}</Layout>
        </Container>
      </Router>
    </ThemeProvider>
  );
};
