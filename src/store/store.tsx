// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/reducers/cartreducer';
import productReducer from '@/store/reducers/productreducer';
import userReducer from '@/store/slices/userSlice';

// Вспомогательная функция для сериализации и десериализации состояний
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.cart); // Сохраняем только состояние корзины
    window.localStorage.setItem('cart', serializedState);
  } catch (err) {
    console.error('Error saving to local storage:', err);
  }
};

const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('cart'); // Читаем только состояние корзины
    if (serializedState === null) return undefined;
    return { cart: JSON.parse(serializedState) }; // Возвращаем объект с ключом 'order'
  } catch (err) {
    console.error('Error loading from local storage:', err);
    return undefined;
  }
};

// Загружаем предыдущие значения из localStorage
const persistedState = loadState();

// Конфигурация стора
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
  },
  preloadedState: persistedState, // Используем загруженное состояние
});

// Сохраняем состояние корзины при каждом изменении
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
