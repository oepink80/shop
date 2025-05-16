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

  // ✅ Сохраняем полный объект пользователя в localStorage
  const saveUserToLocalStorage = (user: UserDetails & { token: string }) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  // ✅ Очищаем пользователя при выходе
  const clearUserFromLocalStorage = () => {
    window.localStorage.removeItem('user');
  };

  // Поиск подходящего пользователя по учетным данным
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

  // ✅ Функция входа
  const signIn = async (credentials: UserCredentials) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const matchingUser = findMatchingUser(credentials);
      if (!matchingUser) {
        throw new Error('Неверное имя пользователя или пароль!');
      }

      // Генерация токена
      const token = Math.random().toString(36).substring(7);

      // Формирование объекта пользователя с токеном
      const userWithToken = { ...matchingUser, token };

      // ✅ Сохраняем полноценного пользователя в localStorage
      saveUserToLocalStorage(userWithToken);

      // ✅ Отправляем объект пользователя в Redux
      dispatch(setUserAction(userWithToken));
    } catch (error) {
      setErrorMessage((error as Error).message || 'Ошибка авторизации');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Функция выхода
  const logout = () => {
    clearUserFromLocalStorage();
    dispatch(setUserAction(null));
  };

  // ✅ Загрузка пользователя при монтировании компонента
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
  }, []);

  return {
    loading,
    errorMessage,
    signIn,
    logout,
    initializing,
  };
}
