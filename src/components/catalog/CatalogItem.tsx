// components/catalog/CatalogItem.tsx

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCartQuantityByProductId } from '@/selectors/cartSelectors';
import { addToCart } from '@/store/actions/cartactions';
import type { ProductType } from '@/types/types';
import { UnknownAction } from 'redux';

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
    <div key={id} className="catalog-item">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price.toFixed(2)} ₽</span>
      {quantity > 0 && <small>(Количество: {quantity})</small>}
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
};

export default CatalogItem;
