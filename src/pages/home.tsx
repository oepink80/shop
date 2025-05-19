// src/pages/home.tsx

import { Grid, Container } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogItem from '@/components/catalog/CatalogItem';
import ProductFilters from '@/components/catalog/ProductFilters';
import { mockProducts } from '@/data/mockdata';
import { selectSearchQuery } from '@/selectors/searchSelectors';
import { setProducts } from '@/store/actions/productactions';
import type { ProductType } from '@/types/types';

type SortOption = 'asc' | 'desc';
interface FilterOptions {
  category?: string; // Категория фильтра
  sortBy?: 'price' | 'title'; // Поле для сортировки
  order?: SortOption; // Порядок сортировки
}

export default function HomePage(): React.JSX.Element {
  const dispatch = useDispatch();
  const productsList = useSelector((state: any) => state.products.list);
  const searchQuery = useSelector(selectSearchQuery);

  React.useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, []);

  const [filterOptions, setFilterOptions] = React.useState<FilterOptions>({
    category: '',
    sortBy: undefined, // Используем undefined, чтобы соответствовать типу
    order: 'asc', // По возрастанию
  });

  const uniqueCategories = Array.from(
    new Set<string>(productsList.map((p: ProductType) => p.category)) // Указываем тип Set как Set<string>
  );

  const filteredAndSortedProducts = React.useMemo(() => {
    let filteredProducts = [...productsList]; // Копируем исходный список

    // Применяем глобальную строку поиска
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        Object.values(product)
          .map((value) => typeof value === 'string' ? value.toLowerCase() : '') // Проверяем тип значения
          .some((val) => val.includes(searchQuery.toLowerCase())),
      );
    }

    // Фильтруем по категории
    if (filterOptions.category && filterOptions.category.trim() !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterOptions.category,
      );
    }

    // Выполняем сортировку
    if (filterOptions.sortBy) {
      filteredProducts.sort((a, b) => {
        switch (filterOptions.sortBy) {
          case 'price': // Цена
            return filterOptions.order === 'asc'
              ? parseFloat(a.price) - parseFloat(b.price)
              : parseFloat(b.price) - parseFloat(a.price);
          case 'title': // Название
            return filterOptions.order === 'asc'
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
    }

    return filteredProducts;
  }, [searchQuery, filterOptions, productsList]);
  return (
    <div className="home-page">
      <h1>Интернет-магазин электроники</h1>
      <Container sx={{ padding: '20px 0' }}>
        <ProductFilters
          categories={uniqueCategories}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
        <Grid container spacing={2}>
          {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map((product: ProductType) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                <CatalogItem product={product} />
              </Grid>
            ))
          ) : (
            <p>Нет товаров</p>
          )}
        </Grid>
      </Container>
    </div>
  );
}
