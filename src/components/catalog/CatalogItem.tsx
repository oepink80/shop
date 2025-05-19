// components/catalog/CatalogItem.tsx

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnknownAction } from 'redux';

import { getCartQuantityByProductId } from '@/selectors/cartSelectors';
import { addToCart } from '@/store/actions/cartactions';
import type { ProductType } from '@/types/types';

interface CatalogItemProps {
  product: ProductType;
}

const CatalogItem = ({ product }: CatalogItemProps): React.JSX.Element => {
  const { id, title, price, imageUrl, description } = product;
  const dispatch = useDispatch();

  // Получаем количество товара из Redux-стора
  const quantity = useSelector((state) =>
    getCartQuantityByProductId(state, id),
  );

  // Функция для добавления товара в корзину
  const handleAddToCart = () => {
    dispatch(addToCart(product) as unknown as UnknownAction);
  };

  return (
    <Card
      key={id}
      className="catalog-item"
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        marginBottom: '10px',
        alignItems: 'center',
        '&:hover': {
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', // Мягкая тень при наведении
        },
      }}
    >
      {imageUrl && (
        <CardMedia
          component="img"
          height="200" // Фиксированная высота изображения
          image={imageUrl}
          alt={title}
          sx={{ objectFit: 'contain' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" component="span">
          {price.toFixed(2)} ₽
        </Typography>
        {quantity > 0 && (
          <Typography variant="caption" display="block" gutterBottom>
            (В корзине: {quantity})
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={handleAddToCart}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main, // Основной цвет темы
            color: '#FFF', // Цвет текста
            borderRadius: '16px', // Закруглённые края
            padding: '8px 16px', // Отступы
            '&:hover': {
              backgroundColor: (theme) => theme.palette.primary.dark, // Цвет при наведении
            },
          }}
        >
          Добавить в корзину
        </Button>
      </CardActions>
    </Card>
  );
};

export default CatalogItem;
