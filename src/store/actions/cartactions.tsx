import type { ProductType } from '@/types/types';
import { saveCartState } from '@/utils/localstorage'; // Импортируем метод сохранения состояния

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  AddToCartAction,
  RemoveFromCartAction,
  IncreaseQuantityAction,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DecreaseQuantityAction,
} from '@/types/types';

export const addToCart = (product: ProductType): AddToCartAction => {
  const action = {
    type: ADD_TO_CART as typeof ADD_TO_CART,
    payload: product,
  };
  saveCartState(); // Сохраняем состояние корзины в localStorage
  return action;
};

export const removeFromCart = (productId: number): RemoveFromCartAction => {
  const action = {
    type: REMOVE_FROM_CART as typeof REMOVE_FROM_CART,
    payload: productId,
  };
  saveCartState(); // Сохраняем состояние корзины в localStorage
  return action;
};

export const increaseQuantity = (productId: number): IncreaseQuantityAction => {
  const action = {
    type: INCREASE_QUANTITY as typeof INCREASE_QUANTITY,
    payload: productId,
  };
  saveCartState(); // Сохраняем состояние корзины в localStorage
  return action;
};

export const decreaseQuantity = (productId: number): DecreaseQuantityAction => {
  const action = {
    type: DECREASE_QUANTITY as typeof DECREASE_QUANTITY,
    payload: productId,
  };
  saveCartState(); // Сохраняем состояние корзины в localStorage
  return action;
};
