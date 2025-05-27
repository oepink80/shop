import { Paper, Typography, Modal, Box, Button } from '@mui/material';
import { nanoid } from 'nanoid';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartTable from '@/components/order/CartTable';
import OrderForm from '@/components/order/OrderForm';
import { clearCart } from '@/store/actions/cartactions';
import { addOrder } from '@/store/actions/orderactions';
import type { OrderInputData, ProductType } from '@/types/types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default function CheckoutPage() {
  // Получаем товары из корзины
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State для открытия модального окна
  const [open, setOpen] = React.useState(false);

  // Функция для закрывания модала
  const handleClose = () => {
    setOpen(false);
    dispatch(clearCart()); // Очистка корзины
    navigate('/');
  };

  // устанавливаем пакет для генерации уникальных ID

  const calculateTotalAmount = (products: Array<ProductType>) => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
  };
  const generateUniqueId = () => nanoid();

  const handleSubmit = async (values: OrderInputData) => {
    try {
      // Генерируем уникальный идентификатор заказа
      const uniqueId = generateUniqueId();

      // Рассчитываем общую сумму заказа
      const totalAmount = calculateTotalAmount(cartItems);

      // Формирование полной структуры заказа
      const completeOrder = {
        ...values,
        id: uniqueId,
        createdAt: new Date().toISOString(),
        totalAmount,
        products: cartItems,
      };

      // Добавляем заказ в Redux
      dispatch(addOrder(completeOrder, cartItems));

      // Очищаем корзину
      dispatch(clearCart());

      // Сохраняем заказ в LocalStorage
      const currentOrders = JSON.parse(localStorage.getItem('orders') ?? '[]');
      currentOrders.push(completeOrder);
      localStorage.setItem('orders', JSON.stringify(currentOrders));

      // Остальная логика остается прежней
      // ...
    } catch (err) {
      console.error('Ошибка при сохранении заказа:', err);
    }
  };

  if (!cartItems || cartItems.length === 0) {
    return <div>Корзина пуста.</div>;
  }

  return (
    <>
      <Paper
        className="checkout-page"
        sx={{ width: '100%', marginBottom: '3', padding: '2rem' }}
      >
        <Typography variant="h4" align="center" mb={3}>
          Оформление заказа
        </Typography>
        <CartTable products={cartItems} />
        <OrderForm onSubmit={handleSubmit} />
      </Paper>

      {/* Модальное окно */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Заказ успешно оформлен!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ваш заказ принят и будет обработан в ближайшее время.
          </Typography>
          <Button onClick={handleClose}>Закрыть</Button>
        </Box>
      </Modal>
    </>
  );
}
