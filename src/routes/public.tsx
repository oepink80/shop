// src/routes.tsx

import { Routes, Route, Navigate } from 'react-router-dom';

import CartPage from '@/pages/cart';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import Newsage from '@/pages/news';
import RegisterPage from '@/pages/register';

const RootRoutes = () => (
  <Routes>
    <Route path="/cart" element={<CartPage />} />
    <Route path="/news" element={<Newsage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RootRoutes;
