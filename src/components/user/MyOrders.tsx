import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { ProductType } from '@/types/types'; // Импорт createSelector

// Типизация
type OrderType = {
  id: string;
  createdAt: string;
  totalAmount: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  paymentMethod: 'card' | 'cash';
  products: Array<ProductType>;
  status: string;
};

// Мемоизированный селектор
const selectAllOrders = createSelector(
  [(state: any) => state.orders],
  (orders) => orders || [],
);

export default function MyOrders() {
  // Используем мемоизированный селектор
  const orders = useSelector(selectAllOrders);

  const ordersFromLS = JSON.parse(localStorage.getItem('orders') ?? '[]');

  // Объединяем два массива заказов
  const allOrders = [...orders, ...ordersFromLS].filter(Boolean);

  // Сортируем заказы по дате (новые сверху)
  const sortedOrders = allOrders.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  // Если заказов нет, возвращаем соответствующее сообщение
  if (!sortedOrders || sortedOrders.length === 0) {
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Нет активных заказов
        </Typography>
      </div>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="my orders table">
        <TableHead>
          <TableRow>
            <TableCell>№ заказа</TableCell>
            <TableCell>Дата создания</TableCell>
            <TableCell>Общая сумма</TableCell>
            <TableCell>Количество товаров</TableCell>
            <TableCell>Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedOrders.map((order: OrderType) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {typeof order.totalAmount === 'number'
                  ? `${order.totalAmount.toFixed(2)} ₽`
                  : 'Сумма неизвестна'}
              </TableCell>
              <TableCell>
                {Array.isArray(order.products)
                  ? order.products.length
                  : 'Нет товаров'}
              </TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
