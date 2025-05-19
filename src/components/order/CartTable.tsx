import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import * as React from 'react';

import { ProductType } from '@/types/types';

interface Props {
  products: ProductType[];
}

export default function CartTable({ products }: Props) {
  const totalAmount = products.reduce(
    (sum: number, product: ProductType) =>
      sum + product.price * product.quantity,
    0,
  );

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название товара</TableCell>
            <TableCell>Цена</TableCell>
            <TableCell>Количество</TableCell>
            <TableCell>Сумма</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price.toFixed(2)} ₽</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                {(product.price * product.quantity).toFixed(2)} ₽
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h5" align="right">
        Общая сумма: {totalAmount.toFixed(2)} ₽
      </Typography>
    </>
  );
}
