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
  onSelectItem?: (product: ProductType) => void; // Колбэк для открытия модала
}

const CatalogItem = React.memo<CatalogItemProps>(
  ({ product, onSelectItem }): React.JSX.Element => {
    const { id, title, price, imageUrl, description, category } = product;
    const dispatch = useDispatch();

    // Получаем количество товара из Redux-стора
    const quantity = useSelector((state) =>
      getCartQuantityByProductId(state, id),
    );

    const handleAddToCart = React.useCallback(() => {
      dispatch(addToCart(product) as unknown as UnknownAction); // Добавляем товар в корзину
    }, [dispatch, product]);

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
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {imageUrl && (
          <CardMedia
            component="img"
            height="200"
            image={imageUrl}
            alt={title}
            sx={{ objectFit: 'cover' }}
          />
        )}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Категория: {category}
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
              backgroundColor: (theme) => theme.palette.primary.main,
              color: '#FFF',
              borderRadius: '16px',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.primary.dark,
              },
            }}
          >
            В корзину
          </Button>
          {onSelectItem && (
            <Button
              size="small"
              onClick={() => onSelectItem(product)}
              sx={{
                ml: 1, // Небольшой отступ слева
                backgroundColor: (theme) => theme.palette.grey[300],
                color: '#000',
                borderRadius: '16px',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.grey[400],
                },
              }}
            >
              Подробнее
            </Button>
          )}
        </CardActions>
      </Card>
    );
  },
);

export default CatalogItem;
