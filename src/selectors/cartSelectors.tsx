// selectors/cartSelectors.ts

import { createSelector } from '@reduxjs/toolkit';
import type { ProductType } from '@/types/types';

export const getCartQuantityByProductId = createSelector(
  [(state) => state.cart.items, (_, productId) => productId],
  (items, productId) => {
    const foundItem = items.find((item: ProductType) => item.id === productId);
    return foundItem ? foundItem.quantity : 0;
  },
);
