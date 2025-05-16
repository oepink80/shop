// src/routes/protected.tsx

import { Routes, Route, Navigate } from 'react-router-dom'; // добавляем Navigate

import AccountPage from '@/pages/account';
import CartPage from '@/pages/cart';
import CheckoutPage from '@/pages/checkout';
import HomePage from '@/pages/home';

const ProtectedRoutes = () => (
  <Routes>
    <Route path="/account" element={<AccountPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Navigate to="/account" replace />} />
  </Routes>
);

export default ProtectedRoutes;
