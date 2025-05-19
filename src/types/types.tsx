// types.ts

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number; // Количество товара
  category: string;
  imageUrl: string;
}

export interface CartState {
  items: ProductType[]; // Список товаров в корзине
}

export interface UserState {
  email?: string;
  token?: string;
  role?: string;
  // Можно добавить любые нужные свойства
}

export interface OrderInputData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  paymentMethod: 'card' | 'cash';
}

type OrderFormValues = {
  id: string;
  createdAt: string;
  totalAmount: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  paymentMethod: 'card' | 'cash';
  products: Array<ProductType>;
};

export type { OrderFormValues };

export interface RootState {
  products: ProductType[]; // Товарный список
  cart: CartState; // Корзина
  user: UserState; // Пользовательские данные
}

// Константы экшенов
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const CLEAR_CART = 'CLEAR_CART';

// Интерфейсы экшенов

export interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  payload: ProductType[];
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: ProductType;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: number; // ID товара
}

export interface IncreaseQuantityAction {
  type: typeof INCREASE_QUANTITY;
  payload: number; // ID товара
}

export interface DecreaseQuantityAction {
  type: typeof DECREASE_QUANTITY;
  payload: number; // ID товара
}
