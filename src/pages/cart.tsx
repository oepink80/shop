import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    <li>
      <b>{product.title}</b> | Цена: {product.price.toFixed(2)} ₽ | Количество:{' '}
      <strong>{product.quantity}</strong> |{' '}
      <button onClick={handleDecrease}>-</button>|{' '}
      <button onClick={handleIncrease}>+</button>
      <br />
      <button onClick={handleRemove}>Удалить</button>
    </li>
  );
};

export default function CartPage() {
  const cartItems = useSelector((state: any) => state.cart.items);

  let totalPrice = 0;
  if (cartItems && cartItems.length > 0) {
    totalPrice = cartItems
      .reduce((acc: number, curr: ProductType) => acc + curr.price, 0)
      .toFixed(2);
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Корзина пуста</h1>
        <p>Пока ничего не выбрано.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      <ul>
        {cartItems.map((item: ProductType) => (
          <CartItem key={item.id} product={item} />
        ))}
      </ul>
      <p>Итого: {totalPrice} ₽</p>
    </div>
  );
}
