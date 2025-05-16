// productreducer.tsx

import { SET_PRODUCTS } from '@/store/actions/productactions';
import type { ProductType } from '@/types/types';

type ProductsState = {
  list: ProductType[];
};

const initialState: ProductsState = {
  list: [],
};

export default function productReducer(
  state: ProductsState = initialState,
  action: { type: string; payload?: ProductType[] },
): ProductsState {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, list: action.payload ?? [] };
    default:
      return state;
  }
}
