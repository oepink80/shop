import store from '@/store/store';

// Типизация нашего состояния пользователя
type UserInfo = {
  username: string;
  token: string;
  role: 'ADMIN' | 'USER';
};

// Общая функция для сериализации и записи данных в localStorage
const serializeAndSave = (key: string, data: any) => {
  try {
    const serializedData = JSON.stringify(data);
    window.localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error(`Ошибка при сохранении ${key}:`, err);
  }
};

// Функция для извлечения данных из localStorage и преобразования их обратно в объекты
const deserializeAndLoad = (key: string) => {
  try {
    const serializedData = window.localStorage.getItem(key);
    if (serializedData === null) return undefined;
    return JSON.parse(serializedData);
  } catch (err) {
    console.error(`Ошибка при восстановлении ${key}:`, err);
    return undefined;
  }
};

// Функция для сохранения состояния корзины
export const saveCartState = () => {
  const cartState = store.getState().cart;
  serializeAndSave('cart', cartState);
};

// Функция для загрузки состояния корзины
export const loadCartState = () => {
  return deserializeAndLoad('cart');
};

// Функция для сохранения данных пользователя
export const saveUserData = (user: UserInfo | null) => {
  if (user) {
    serializeAndSave('user', user);
  } else {
    window.localStorage.removeItem('user'); // Если передали null, удаляем запись
  }
};

// Функция для загрузки данных пользователя
export const loadUserData = () => {
  return deserializeAndLoad('user') as UserInfo | null;
};