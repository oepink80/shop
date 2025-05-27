import type { ProductType } from '@/types/types';

export const mockProducts: ProductType[] = [
  {
    id: 1,
    title: 'Samsung Galaxy S23',
    description: 'Новейший флагман Samsung',
    price: 89990,
    quantity: 10,
    category: 'smartphones',
    imageUrl: '/images/1.jpg',
    characteristics:
      'Экран Dynamic AMOLED 2X, процессор Snapdragon 8 Gen 2, тройная камера, защита IP68.',
  },
  {
    id: 2,
    title: 'Apple MacBook Air M2',
    description: 'Компактный ультрабук Apple',
    price: 129990,
    quantity: 5,
    category: 'laptops',
    imageUrl: '/images/2.jpg',
    characteristics:
      'Процессор M2, дисплей Retina, вес менее килограмма, SSD накопитель.',
  },
  {
    id: 3,
    title: 'PlayStation 5 Console',
    description: 'Новая игровая консоль Sony PlayStation',
    price: 59990,
    quantity: 8,
    category: 'consoles',
    imageUrl: '/images/3.jpg',
    characteristics:
      'SSD-накопитель, поддержка 4K HDR, обратная совместимость с PS4.',
  },
  {
    id: 4,
    title: 'Nintendo Switch OLED Model',
    description: 'Обновленная версия Nintendo Switch с большим экраном',
    price: 39990,
    quantity: 12,
    category: 'consoles',
    imageUrl: '/images/4.jpg',
    characteristics:
      'Большой OLED-экран, улучшенная автономность, док-станция с LAN-портом.',
  },
  {
    id: 5,
    title: 'Bose QuietComfort Headphones',
    description: 'Шумоподавляющие наушники премиум-класса',
    price: 34990,
    quantity: 15,
    category: 'headphones',
    imageUrl: '/images/5.jpg',
    characteristics:
      'Активное шумоподавление, Bluetooth подключение, длительное время работы от батареи.',
  },
  {
    id: 6,
    title: 'Logitech MX Master 3 Mouse',
    description: 'Эргономичная мышь с продвинутым трекингом',
    price: 14990,
    quantity: 20,
    category: 'accessories',
    imageUrl: '/images/6.jpg',
    characteristics:
      'Высокочувствительный сенсор, беспроводное соединение, настраиваемые кнопки.',
  },
  {
    id: 7,
    title: 'Philips Hue Smart Bulb',
    description: 'Умная лампочка с поддержкой голосовых ассистентов',
    price: 1999,
    quantity: 30,
    category: 'lighting',
    imageUrl: '/images/7.jpg',
    characteristics:
      'Поддержка Wi-Fi, изменение цвета света, интеграция с Alexa и Google Assistant.',
  },
  {
    id: 8,
    title: 'DJI Mini 3 Pro Drone',
    description: 'Легкий дрон DJI с возможностью съемки 4K',
    price: 69990,
    quantity: 7,
    category: 'drones',
    imageUrl: '/images/8.jpg',
    characteristics:
      'Камера 48 МП, съемка 4K видео, компактность, возможность полета около 34 минут.',
  },
  {
    id: 9,
    title: 'Canon EOS R5 Camera',
    description: 'Профессиональная беззеркальная камера Canon',
    price: 239990,
    quantity: 3,
    category: 'cameras',
    imageUrl: '/images/9.jpg',
    characteristics:
      'Матрица 45 Мпикселей, видеосъемка 8К, двойная стабилизация изображения.',
  },
  {
    id: 10,
    title: 'Garmin Forerunner 945 GPS Watch',
    description: 'Умные часы Garmin с GPS и множеством спортивных режимов',
    price: 59990,
    quantity: 9,
    category: 'watches',
    imageUrl: '/images/10.jpg',
    characteristics:
      'GPS + GLONASS, пульсометр, водонепроницаемость, длительная работа аккумулятора.',
  },
  {
    id: 11,
    title: 'Google Pixel Buds A-Series',
    description: 'Беспроводные наушники с активным шумоподавлением',
    price: 12990,
    quantity: 18,
    category: 'headphones',
    imageUrl: '/images/11.jpg',
    characteristics:
      'Автоматическое переключение между устройствами, встроенный микрофон, быстрая зарядка.',
  },
  {
    id: 12,
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    description: 'Премиальные наушники с превосходным качеством звука',
    price: 49990,
    quantity: 10,
    category: 'headphones',
    imageUrl: '/images/12.jpg',
    characteristics:
      'Активное шумоподавление, автоматическая оптимизация звука, комфортная посадка.',
  },
  {
    id: 13,
    title: 'Razer Blade 15 Gaming Laptop',
    description: 'Игровой ноутбук с мощным процессором и видеокартой',
    price: 179990,
    quantity: 6,
    category: 'laptops',
    imageUrl: '/images/13.jpg',
    characteristics:
      'Процессор Intel Core i7, видеокарта NVIDIA GeForce RTX 3070 Ti, высокая частота обновления экрана.',
  },
  {
    id: 14,
    title: 'Asus ROG Strix SCAR 17 SE Gaming Laptop',
    description: 'Флагманский игровой ноутбук ASUS',
    price: 249990,
    quantity: 4,
    category: 'laptops',
    imageUrl: '/images/14.jpg',
    characteristics:
      'Процессор AMD Ryzen 9, видеокарта NVIDIA GeForce RTX 4090, дисплей с высокой частотой обновления.',
  },
  {
    id: 15,
    title: 'GoPro Hero11 Black Action Camera',
    description: 'Экшн-камера с широким углом обзора и защитой от воды',
    price: 49990,
    quantity: 12,
    category: 'cameras',
    imageUrl: '/images/15.jpg',
    characteristics:
      'Съемка видео 5.3K, прочный корпус, поддержка карт памяти microSD.',
  },
  {
    id: 16,
    title: 'Microsoft Surface Duo 2 Dual-Screen Phone',
    description: 'Смартфон с двумя экранами от Microsoft',
    price: 119990,
    quantity: 8,
    category: 'smartphones',
    imageUrl: '/images/16.jpg',
    characteristics: 'Двойной экран, Android OS, поддержка стилуса.',
  },
  {
    id: 17,
    title: 'Huawei MatePad Pro Tablet',
    description: 'Планшет Huawei с мощной производительностью',
    price: 69990,
    quantity: 15,
    category: 'tablets',
    imageUrl: '/images/17.jpg',
    characteristics:
      'Высокая производительность, большой объем оперативной памяти, поддержка клавиатуры и стилуса.',
  },
  {
    id: 18,
    title: 'Anker PowerCore Slim 10000 Portable Charger',
    description: 'Портативный аккумулятор Anker с быстрой зарядкой',
    price: 3999,
    quantity: 25,
    category: 'accessories',
    imageUrl: '/images/18.jpg',
    characteristics:
      'Емкость 10000 мАч, быстрая зарядка, легкий и компактный дизайн.',
  },
  {
    id: 19,
    title: 'JBL Flip 5 Waterproof Bluetooth Speaker',
    description: 'Водонепроницаемая колонка JBL с качественным звуком',
    price: 12990,
    quantity: 20,
    category: 'audio',
    imageUrl: '/images/19.jpg',
    characteristics:
      'Защита от воды IPX7, мощный звук, долгое время работы от батареи.',
  },
  {
    id: 20,
    title: 'Fitbit Sense Advanced Health & Fitness Smartwatch',
    description: 'Умные часы Fitbit с функциями здоровья и фитнеса',
    price: 34990,
    quantity: 10,
    category: 'watches',
    imageUrl: '/images/20.jpg',
    characteristics:
      'Мониторинг сердечного ритма, отслеживание сна, поддержка уведомлений.',
  },
  {
    id: 21,
    title: 'Xiaomi Mi Band 7 Pro',
    description:
      'Умный браслет Xiaomi с расширенными возможностями мониторинга активности',
    price: 7990,
    quantity: 25,
    category: 'watches',
    imageUrl: '/images/21.jpg',
    characteristics:
      'Цветной AMOLED-дисплей, мониторинг пульса и уровня кислорода в крови, поддержка GPS.',
  },
  {
    id: 22,
    title: 'Lenovo ThinkPad X1 Carbon',
    description: 'Ультракомпактный бизнес-ноутбук Lenovo',
    price: 149990,
    quantity: 7,
    category: 'laptops',
    imageUrl: '/images/22.jpg',
    characteristics:
      'Легкий алюминиевый корпус, высокопроизводительный процессор Intel, отличная автономность.',
  },
  {
    id: 23,
    title: 'Beats Studio Buds True Wireless Earbuds',
    description: 'Беспроводные наушники Beats с активным шумоподавлением',
    price: 15990,
    quantity: 18,
    category: 'headphones',
    imageUrl: '/images/23.jpg',
    characteristics:
      'Bluetooth подключение, активное шумоподавление, длительный срок службы батареи.',
  },
  {
    id: 24,
    title: 'LG CX Series OLED TV',
    description: 'Оригинальный телевизор LG с инновационной технологией OLED',
    price: 179990,
    quantity: 5,
    category: 'tv',
    imageUrl: '/images/24.jpg',
    characteristics:
      'OLED-технология, Dolby Vision и Atmos, интеллектуальная система webOS.',
  },
  {
    id: 25,
    title: 'Nikon Z7 II Mirrorless Digital Camera',
    description: 'Беззеркальная фотокамера Nikon с высоким разрешением',
    price: 199990,
    quantity: 4,
    category: 'cameras',
    imageUrl: '/images/25.jpg',
    characteristics:
      'Матрица 45.7MP, двойная карта памяти, стабилизатор изображения.',
  },
  {
    id: 26,
    title: 'TP-Link Archer AX6000 WiFi Router',
    description: 'Wi-Fi роутер TP-Link с поддержкой стандарта Wi-Fi 6',
    price: 19990,
    quantity: 15,
    category: 'networking',
    imageUrl: '/images/26.jpg',
    characteristics:
      'Скорость передачи данных до 6 Гбит/с, поддержка MU-MIMO, шесть антенн.',
  },
  {
    id: 27,
    title: 'WD My Passport Ultra External Hard Drive',
    description: 'Внешний жесткий диск WD с высокой емкостью хранения',
    price: 11990,
    quantity: 20,
    category: 'storage',
    imageUrl: '/images/27.jpg',
    characteristics: 'Объем хранилища 4TB, порт USB-C, металлический корпус.',
  },
  {
    id: 28,
    title: 'Epson EcoTank ET-2720 All-in-One Printer',
    description:
      'Многофункциональный принтер Epson с системой непрерывной подачи чернил',
    price: 19990,
    quantity: 12,
    category: 'printers',
    imageUrl: '/images/28.jpg',
    characteristics:
      'Система непрерывной подачи чернил, экономичный расход, печать фото высокого качества.',
  },
  {
    id: 29,
    title: 'Bosch Serie|8 Dishwasher',
    description: 'Современная посудомоечная машина Bosch класса люкс',
    price: 99990,
    quantity: 6,
    category: 'home_appliances',
    imageUrl: '/images/29.jpg',
    characteristics:
      'Энергосберегающая технология, бесшумная работа, вместительность до 14 комплектов посуды.',
  },
  {
    id: 30,
    title: "De'Longhi ECAM23460 Magnifica Coffee Machine",
    description:
      "Автоматическая кофемашина De'Longhi с функцией автоматического приготовления кофе",
    price: 59990,
    quantity: 10,
    category: 'kitchen_appliances',
    imageUrl: '/images/30.jpg',
    characteristics:
      'Автоматический капучинатор, настройка крепости напитка, возможность программирования рецептов.',
  },
  {
    id: 31,
    title: 'MSI Creator 17 Studio Edition Laptop',
    description:
      'Ноутбук MSI для профессиональных дизайнеров и творческих специалистов',
    price: 229990,
    quantity: 5,
    category: 'laptops',
    imageUrl: '/images/31.jpg',
    characteristics:
      'Процессор Intel Core i9, графический ускоритель NVIDIA Quadro RTX 5000, экран Pantone Validated.',
  },
  {
    id: 32,
    title: 'Sennheiser HD 660 S Open-back Headphones',
    description: 'Открытые аудиофильные наушники Sennheiser с глубокими басами',
    price: 39990,
    quantity: 10,
    category: 'headphones',
    imageUrl: '/images/32.jpg',
    characteristics:
      'Открытого типа, высокое качество звучания, долговечность конструкции.',
  },
  {
    id: 33,
    title: 'HTC Vive Cosmos Elite VR Headset',
    description:
      'VR-шлем HTC с высококачественным дисплеем и интуитивным управлением',
    price: 79990,
    quantity: 8,
    category: 'vr',
    imageUrl: '/images/33.jpg',
    characteristics:
      'Разрешение дисплея 2880x1700 пикселей, контроллеры с обратной связью, поддержка SteamVR.',
  },
  {
    id: 34,
    title: 'Dyson Pure Cool Me Personal Purifier Fan',
    description: 'Настольный очиститель воздуха Dyson с режимом охлаждения',
    price: 29990,
    quantity: 15,
    category: 'home_appliances',
    imageUrl: '/images/34.jpg',
    characteristics:
      'Эффективная очистка воздуха, регулируемый поток воздуха, таймер отключения.',
  },
  {
    id: 35,
    title: 'Seagate BarraCuda Q Hybrid Solid State Drive',
    description:
      'Гибридный твердотельный накопитель Seagate с высокой скоростью чтения',
    price: 12990,
    quantity: 20,
    category: 'storage',
    imageUrl: '/images/35.jpg',
    characteristics:
      'Объем 2 ТБ, скорость чтения до 540 МБ/с, интерфейс SATA III.',
  },
  {
    id: 36,
    title: 'Panasonic Lumix DC-G100 Compact Camera',
    description:
      'Компактная цифровая камера Panasonic с сенсором Micro Four Thirds',
    price: 69990,
    quantity: 12,
    category: 'cameras',
    imageUrl: '/images/36.jpg',
    characteristics:
      'Сенсор Micro Four Thirds, запись видео 4K, поворотный сенсорный экран.',
  },
  {
    id: 37,
    title: 'Western Digital My Cloud Home NAS Storage System',
    description: 'NAS-хранилище Western Digital для домашнего использования',
    price: 24990,
    quantity: 10,
    category: 'storage',
    imageUrl: '/images/37.jpg',
    characteristics:
      'Объем хранилища 4 TB, доступ к файлам удаленно, простое управление.',
  },
  {
    id: 38,
    title: 'Acer Predator Helios 300 Gaming Laptop',
    description:
      'Игровой ноутбук Acer с отличной графикой и производительностью',
    price: 119990,
    quantity: 7,
    category: 'laptops',
    imageUrl: '/images/38.jpg',
    characteristics:
      'Графика NVIDIA GeForce RTX 3060, IPS-дисплей с частотой 144 Гц, подсветка RGB.',
  },
  {
    id: 39,
    title: 'Yamaha YAS-209 Soundbar with Subwoofer',
    description: 'Саундбар Yamaha с сабвуфером для улучшения качества звука',
    price: 39990,
    quantity: 15,
    category: 'audio',
    imageUrl: '/images/39.jpg',
    characteristics:
      'Совместимость с Alexa, поддержка DTS Virtual:X, простая установка.',
  },
  {
    id: 40,
    title: 'Belkin Boost Charge Pro MagSafe Charging Dock',
    description:
      'Зарядная станция Belkin с поддержкой MagSafe для устройств Apple',
    price: 14990,
    quantity: 20,
    category: 'accessories',
    imageUrl: '/images/40.jpg',
    characteristics:
      'Одновременная зарядка смартфона и часов, быстрое заряжание MagSafe.',
  },
];
