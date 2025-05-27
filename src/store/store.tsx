// store.ts
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '@/store/reducers/cartreducer';
import productReducer from '@/store/reducers/productreducer';
import searchReducer from '@/store/reducers/searchReducer';
import userReducer from '@/store/slices/userSlice';
import { CartState, ProductType } from '@/types/types';

// Описание типов приложения
export interface RootState {
  products: ProductsState;
  cart: CartState;
  search: SearchState;
}

export interface ProductsState {
  list: ProductType[];
}

export interface SearchState {
  searchQuery: string;
}

export type AppDispatch = typeof store.dispatch;

// Функция сохранения состояния в Local Storage
const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('app-state', serializedState);
  } catch (err) {
    console.error('Ошибка при сохранении состояния:', err);
  }
};

// Функция загрузки состояния из Local Storage
const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('app-state');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState) as Partial<RootState>; // Частичная структура состояния
  } catch (err) {
    console.error('Ошибка при загрузке состояния:', err);
    return undefined;
  }
};

// Настройка магазина Redux
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    search: searchReducer,
    user: userReducer,
  },
  preloadedState: loadState(),
});

// Обработчик изменений для сохранения состояния
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
