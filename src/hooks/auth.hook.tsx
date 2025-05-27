// src/hooks/auth.hook.tsx

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserAction } from '@/store/slices/userSlice';

type UserCredentials = {
  username: string;
  password: string;
};

type UserRole = 'ADMIN' | 'USER';

type UserDetails = {
  username: string;
  role: UserRole;
};

// Список тестовых пользователей
const usersList: Array<UserDetails & { password: string }> = [
  { username: 'admin', password: 'adminpass', role: 'ADMIN' },
  { username: 'user', password: 'userpass', role: 'USER' },
];

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);

  const saveUserToLocalStorage = (user: UserDetails & { token: string }) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  const clearUserFromLocalStorage = () => {
    window.localStorage.removeItem('user');
  };

  const findMatchingUser = (
    credentials: UserCredentials,
  ): UserDetails | null => {
    return (
      usersList.find(
        (user) =>
          user.username === credentials.username &&
          user.password === credentials.password,
      ) || null
    );
  };

  const signIn = async (credentials: UserCredentials) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const matchingUser = findMatchingUser(credentials);
      if (!matchingUser) {
        throw new Error('Неверное имя пользователя или пароль!');
      }

      const token = Math.random().toString(36).substring(7);

      const userWithToken = { ...matchingUser, token };

      saveUserToLocalStorage(userWithToken);

      dispatch(setUserAction(userWithToken));
    } catch (error) {
      let message = '';
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = String(error); // Преобразование в строку, если ошибка другого типа
      }
      console.error('Ошибка авторизации:', message); // Сообщение об ошибке
      setErrorMessage(message || 'Ошибка авторизации');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearUserFromLocalStorage();
    dispatch(setUserAction(null));
  };

  useEffect(() => {
    const loadUserFromLocalStorage = () => {
      const storedUser = window.localStorage.getItem('user');
      if (storedUser) {
        try {
          return JSON.parse(storedUser); // Пробуем разобрать строку как JSON
        } catch (err) {
          console.warn('Некорректные данные пользователя в localStorage.', err);
          window.localStorage.removeItem('user'); // Чистим неправильное значение
          return null;
        }
      }
      return null;
    };

    const storedUser = loadUserFromLocalStorage();
    if (storedUser) {
      dispatch(setUserAction(storedUser)); // Восстанавливаем пользователя из localStorage
    }

    setInitializing(false);
  }, [dispatch]);

  return {
    loading,
    errorMessage,
    signIn,
    logout,
    initializing,
  };
}
