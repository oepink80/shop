import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from '@/types/types';
import type { ProductType } from '@/types/types';

type CartState = {
  items: ProductType[]; // Массив товаров в корзине
};

const initialState: CartState = {
  items: [], // Начальное состояние корзины пустое
};

export default function cartReducer(
  state = initialState,
  action: any,
): CartState {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        return { ...state, items: [...state.items, newItem] };
      }
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    case INCREASE_QUANTITY: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      }
      return state;
    }

    case DECREASE_QUANTITY: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        const currentItem = updatedItems[existingItemIndex];
        if (currentItem.quantity > 1) {
          updatedItems[existingItemIndex] = {
            ...currentItem,
            quantity: currentItem.quantity - 1,
          };
        } else {
          updatedItems.splice(existingItemIndex, 1); // Если осталось 1 единица, удаляем товар
        }
        return { ...state, items: updatedItems };
      }
      return state;
    }

    case CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
}
