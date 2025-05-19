import type { OrderFormValues } from '@/types/types';
import { ADD_ORDER } from '../actions/orderactions';

const initialState: Array<OrderFormValues> = [];

export default function ordersReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload]; // Добавляем полный заказ с товарами
    default:
      return state;
  }
}