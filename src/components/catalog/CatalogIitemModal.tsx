import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnknownAction } from 'redux';

import { getCartQuantityByProductId } from '@/selectors/cartSelectors';
import { addToCart } from '@/store/actions/cartactions';
import type { ProductType } from '@/types/types';

interface CatalogItemModalProps {
  isOpen: boolean; // Признак открытости модального окна
  onClose: () => void; // Функция закрытия модального окна
  itemData: ProductType; // Данные текущего товара
}

const CatalogIitemModal = ({
  isOpen,
  onClose,
  itemData,
}: CatalogItemModalProps) => {
  const dispatch = useDispatch(); // Получаем доступ к диспетчеру действий

  // Обработчик нажатия кнопки "Купить"
  const handleBuyClick = () => {
    dispatch(addToCart(itemData) as unknown as UnknownAction); // Отправляем товар в корзину
  };

  const quantity = useSelector((state) =>
    getCartQuantityByProductId(state, itemData.id),
  );

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{itemData?.title || ''}</DialogTitle>
      <DialogContent dividers>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={itemData?.imageUrl || ''}
            alt={itemData?.title || ''}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Typography variant="subtitle1">
            <b>{itemData?.description || ''}</b>
          </Typography>
          <Typography variant="subtitle1">
            {itemData?.characteristics || ''}
          </Typography>
          <Typography variant="caption">
            Цена: {itemData?.price !== undefined ? itemData.price : 'Нет цены'}{' '}
            руб.
          </Typography>
          {quantity > 0 && (
            <Typography variant="caption" display="block" gutterBottom>
              (В корзине: {quantity})
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрыть
        </Button>
        <Button
          onClick={handleBuyClick} // Привяжем новый обработчик
          color="secondary"
          variant="contained"
        >
          Купить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CatalogIitemModal;
