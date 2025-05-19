import type { OrderFormValues, ProductType } from '@/types/types';

export const ADD_ORDER = 'ADD_ORDER';

export function addOrder(
  orderData: OrderFormValues,
  products: Array<ProductType>,
) {
  return {
    type: ADD_ORDER,
    payload: { ...orderData, products },
  };
}
