// src/themes/theme.ts

import { createTheme } from '@mui/material/styles';

const Shoptheme = createTheme({
  palette: {
    primary: {
      main: '#005bff',
    },
    secondary: {
      main: '#FFFFFF', // Белый
    },
    background: {
      paper: '#FFFFFF', // Фон элементов
      default: '#F5F5F5', // Общий фон
    },
    text: {
      primary: '#333333', // Основной цвет текста
      secondary: '#666666', // Дополнительный цвет текста
    },
    action: {
      active: '#666666', // Цвет активного состояния
      hover: '#888888', // Цвет при наведении
      selected: '#999999', // Цвет выбранного состояния
      disabled: '#CCCCCC', // Цвет отключенного состояния
      disabledBackground: '#F5F5F5', // Цвет фона отключенного состояния
      focus: '#999999', // Цвет фокуса
    },
  },
  typography: {
    fontFamily: ['Calibri', 'arial', 'sans-serif'].join(','),
  },
});

export default Shoptheme;
