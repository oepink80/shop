import {
  Avatar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  Container,
} from '@mui/material';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UnknownAction } from 'redux';

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '@/store/actions/cartactions';
import type { ProductType } from '@/types/types';

interface CartItemProps {
  product: ProductType;
}

const CartItem = ({ product }: CartItemProps): React.JSX.Element => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(product.id) as unknown as UnknownAction);
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id) as unknown as UnknownAction);
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id) as unknown as UnknownAction);
  };

  return (
    <Box mb={2}>
      <ListItem
        divider
        secondaryAction={
          <Button
            sx={{
              color: '#000', // Устанавливаем цвет текста кнопки
              fontSize: '16px', // Устанавливаем размер текста кнопки
              minWidth: 'unset', // Устанавливаем минимальное значение ширины
            }}
            onClick={handleRemove}
          >
            X
          </Button>
        }
      >
        <Avatar sx={{ mr: 2 }} src={product.imageUrl} />
        <ListItemText
          primary={`${product.title} (${product.price.toFixed(2)} ₽)`}
        />
        <Button onClick={handleDecrease}>-</Button>
        <Typography ml={1}>{product.quantity}</Typography>
        <Button onClick={handleIncrease}>+</Button>
      </ListItem>
    </Box>
  );
};

export default function CartPage() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const user = useSelector((state: any) => state.user);
  const loggedIn = Boolean(user);

  let totalPrice = 0;
  if (cartItems && cartItems.length > 0) {
    totalPrice = cartItems
      .reduce(
        (acc: number, curr: ProductType) => acc + curr.price * curr.quantity,
        0,
      )
      .toFixed(2);
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4" align="center" mt={4}>
          Ваша корзина пуста
        </Typography>
        <Typography variant="subtitle1" align="center" mt={2}>
          Пока ничего не выбрано.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginBottom: '30px' }}>
      <Typography variant="h4" align="center" mt={4}>
        Корзина покупок
      </Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        {cartItems.map((item: ProductType) => (
          <CartItem key={item.id} product={item} />
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Box textAlign="right" mt={2}>
        <Typography variant="h5">Общая сумма: {totalPrice} ₽</Typography>
        {!loggedIn ? (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Авторизуйтесь
            </Button>
          </Link>
        ) : (
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Оформить заказ
            </Button>
          </Link>
        )}
      </Box>
    </Container>
  );
}
