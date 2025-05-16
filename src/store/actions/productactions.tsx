import type { ProductType } from '@/types/types';

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

export const SET_PRODUCTS = 'SET_PRODUCTS' as const;

type SetProductsAction = {
  type: typeof SET_PRODUCTS;
  payload: ProductType[];
};

export const setProducts = (payload: ProductType[]): SetProductsAction => ({
  type: SET_PRODUCTS,
  payload,
});

