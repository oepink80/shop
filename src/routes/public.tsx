// src/routes.tsx

import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import CartPage from '@/pages/cart';

const RootRoutes = () => (
  <Routes>
    <Route path="/cart" element={<CartPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RootRoutes;
