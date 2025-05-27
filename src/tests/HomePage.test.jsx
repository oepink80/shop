import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Импортируем mock store
import HomePage from '@/pages/home';
import { mockProducts } from '../data/mockdata';

const mockStore = configureStore([]);

describe('HomePage', () => {
  it('renders the homepage with correct title', async () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(screen.getByText(/Интернет-магазин электроники/i)).toBeInTheDocument();
  });

  it('displays list of products when loaded', async () => {
    const store = mockStore({
      products: { list: mockProducts },
    });
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.queryAllByTestId('catalog-item')).not.toHaveLength(0); // Проверяем наличие продуктов
    });
  });

  it('filters products by search query', async () => {
    const store = mockStore({
      products: { list: mockProducts },
    });
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    userEvent.type(screen.getByRole('searchbox'), 'phone');
    await waitFor(() => {
      expect(screen.queryAllByTestId('catalog-item')).toHaveLength(1); // Предположительно, один продукт подходит под фильтр
    });
  });

  it('loads more items when scrolling down', async () => {
    jest.spyOn(window, 'scrollTo').mockImplementation(jest.fn());
    const store = mockStore({
      products: { list: mockProducts },
    });
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    window.scrollY = document.body.scrollHeight;
    window.dispatchEvent(new Event('scroll'));
    await waitFor(() => {
      expect(screen.queryAllByTestId('catalog-item')).toHaveLength(16); // Загружено больше элементов
    });
  });

  it('opens modal for selected product', async () => {
    const store = mockStore({
      products: { list: mockProducts },
    });
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    userEvent.click(screen.getAllByTestId('catalog-item')[0]); // Нажатие на первый элемент каталога
    await waitFor(() => {
      expect(screen.getByTestId('modal-container')).toBeInTheDocument(); // Модальное окно открыто
    });
  });
});