import React, { act } from 'react';
import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from '@/pages/home';
import { mockProducts } from '../data/mockdata';
import { addToCart } from '@/store/actions/cartactions';
import store from '@/store/store';

// Подключение расширения matchers
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

// Initial state includes empty cart and mocked products
const initialState = {
  products: { list: mockProducts },
  cart: { items: [] },
  search: { searchQuery: '' },
  user: { currentUser: null },
};

class IntersectionObserverMock {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe(element) {
    element.isIntersecting = true;
    this.callback([{ isIntersecting: true }], this);
  }

  disconnect() {}
}

window.IntersectionObserver = IntersectionObserverMock;

describe('HomePage', () => {
  it('renders the homepage with correct title', async () => {

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(screen.getByText(/Интернет-магазин электроники/i)).toBeInTheDocument();
  });

  // it('displays all products correctly', () => {
  //
  //   render(
  //     <Provider store={store}>
  //       <HomePage />
  //     </Provider>
  //   );
  //
  //   // Проверим, что все товары отображаются
  //   mockProducts.forEach((product) => {
  //     expect(screen.getByText(product.title)).toBeInTheDocument();
  //   });
  // });

  it('clicking on a product opens details modal', () => {

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Нажимаем на первый товар
    const firstProductTitle = mockProducts[0].title;
    const firstProductLink = screen.getByText(firstProductTitle);
    userEvent.click(firstProductLink);

    // Проверяем, открылся ли модал с деталями товара
    expect(screen.getByText(firstProductTitle)).toBeInTheDocument();
  });

});
