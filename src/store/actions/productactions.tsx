import type { ProductType } from '@/types/types';

export const SET_PRODUCTS = 'SET_PRODUCTS' as const;

type SetProductsAction = {
  type: typeof SET_PRODUCTS;
  payload: ProductType[];
};

export const setProducts = (payload: ProductType[]): SetProductsAction => ({
  type: SET_PRODUCTS,
  payload,
});
