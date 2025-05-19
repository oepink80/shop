import type { ProductType } from '@/types/types';

export const mockProducts: ProductType[] = [
  {
    id: 1,
    title: 'Samsung Galaxy S23',
    description: 'Новейший флагман Samsung',
    price: 89990,
    quantity: 10, // начальное количество на складе
    category: 'smartphones',
    imageUrl: '/images/1.jpg', // Найдите подходящее изображение на стоке
  },
  {
    id: 2,
    title: 'Apple MacBook Air M2',
    description: 'Компактный ультрабук Apple',
    price: 129990,
    quantity: 5, // начальное количество на складе
    category: 'laptops',
    imageUrl: '/images/2.jpg', // То же самое
  },
  {
    id: 3,
    title: 'PlayStation 5 Console',
    description: 'Новая игровая консоль Sony PlayStation',
    price: 59990,
    quantity: 8, // начальное количество на складе
    category: 'consoles',
    imageUrl: '/images/3.jpg', // То же самое
  },
  {
    id: 4,
    title: 'Nintendo Switch OLED Model',
    description: 'Обновленная версия Nintendo Switch с большим экраном',
    price: 39990,
    quantity: 12, // начальное количество на складе
    category: 'consoles',
    imageUrl: '/images/4.jpg', // То же самое
  },
  {
    id: 5,
    title: 'Bose QuietComfort Headphones',
    description: 'Шумоподавляющие наушники премиум-класса',
    price: 34990,
    quantity: 15, // начальное количество на складе
    category: 'headphones',
    imageUrl: '/images/5.jpg', // То же самое
  },
  {
    id: 6,
    title: 'Logitech MX Master 3 Mouse',
    description: 'Эргономичная мышь с продвинутым трекингом',
    price: 14990,
    quantity: 20, // начальное количество на складе
    category: 'accessories',
    imageUrl: '/images/6.jpg', // То же самое
  },
  {
    id: 7,
    title: 'Philips Hue Smart Bulb',
    description: 'Умная лампочка с поддержкой голосовых ассистентов',
    price: 1999,
    quantity: 30, // начальное количество на складе
    category: 'lighting',
    imageUrl: '/images/7.jpg', // То же самое
  },
  {
    id: 8,
    title: 'DJI Mini 3 Pro Drone',
    description: 'Легкий дрон DJI с возможностью съемки 4K',
    price: 69990,
    quantity: 7, // начальное количество на складе
    category: 'drones',
    imageUrl: '/images/8.jpg', // То же самое
  },
  {
    id: 9,
    title: 'Canon EOS R5 Camera',
    description: 'Профессиональная беззеркальная камера Canon',
    price: 239990,
    quantity: 3, // начальное количество на складе
    category: 'cameras',
    imageUrl: '/images/9.jpg', // То же самое
  },
  {
    id: 10,
    title: 'Garmin Forerunner 945 GPS Watch',
    description: 'Умные часы Garmin с GPS и множеством спортивных режимов',
    price: 59990,
    quantity: 9, // начальное количество на складе
    category: 'watches',
    imageUrl: '/images/10.jpg',
  },
];
