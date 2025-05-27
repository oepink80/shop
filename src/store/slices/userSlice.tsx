// src/store/slices/userSlice.tsx

import { createSelector, createSlice } from '@reduxjs/toolkit';

import { CurrentUserInfo } from '@/types/types'; // Импортируем интерфейс пользователя

type InitialState = CurrentUserInfo | null; // Стартовое состояние - может быть null или пользователь

const initialState: InitialState = null; // Начальное состояние null

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAction(state, action) {
      return action.payload; // Просто возвращаем payload, поскольку его тип совпадает с ожидаемой структурой
    },
    logoutAction() {
      return null; // Очистка состояния при выходе
    },
  },
});

// Селектор для выборки текущего пользователя
export const selectUser = createSelector(
  (state: { user: InitialState }) => state.user,
  (user) => user,
);

// Экшены
export const { setUserAction, logoutAction } = userSlice.actions;

// Экспортируемый редюсер
export default userSlice.reducer;
