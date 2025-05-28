import { Grid, Container } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogIitemModal from '@/components/catalog/CatalogIitemModal';
import CatalogItem from '@/components/catalog/CatalogItem';
import InfiniteScrollLoader from '@/components/catalog/InfiniteScrollLoader';
import ProductFilters from '@/components/catalog/ProductFilters';
import { mockProducts } from '@/data/mockdata';
import { selectSearchQuery } from '@/selectors/searchSelectors';
import { setProducts } from '@/store/actions/productactions';
import type { ProductType } from '@/types/types';

type SortOption = 'asc' | 'desc';
interface FilterOptions {
  category?: string;
  sortBy?: 'price' | 'title';
  order?: SortOption;
}

export default function HomePage(): React.JSX.Element {
  const dispatch = useDispatch();
  const productsList = useSelector((state: any) => state.products.list);
  const searchQuery = useSelector(selectSearchQuery);

  React.useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  const [filterOptions, setFilterOptions] = React.useState<FilterOptions>({
    category: '',
    sortBy: undefined,
    order: 'asc',
  });

  const [pageSize, setPageSize] = React.useState(8);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  const loadMoreItems = React.useCallback(() => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setPageSize((prevPageSize) => prevPageSize + 8);
        setIsLoadingMore(false);
      }, 100);
    }
  }, [isLoadingMore]);

  const [selectedProduct, setSelectedProduct] =
    React.useState<ProductType | null>(null);

  const handleSelectItem = (product: ProductType) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  const uniqueCategories = Array.from(
    new Set(productsList.map((p: ProductType) => String(p.category))),
  ) as string[];

  const filteredAndSortedProducts = React.useMemo(() => {
    let filteredProducts = [...productsList];

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        Object.values(product).some(
          (val) =>
            typeof val === 'string' &&
            val.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    }

    if (filterOptions.category && filterOptions.category.trim() !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterOptions.category,
      );
    }

    return filteredProducts.slice(0, pageSize);
  }, [productsList, searchQuery, filterOptions, pageSize]);

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
                <CatalogItem
                  product={product}
                  onSelectItem={handleSelectItem}
                />
              </Grid>
            ))
          ) : (
            <p>Нет товаров</p>
          )}
          <InfiniteScrollLoader
            isLoadingMore={isLoadingMore}
            pageSize={pageSize}
            setPageSize={setPageSize}
            loadMoreItems={loadMoreItems}
          />
        </Grid>
      </Container>
      {selectedProduct && (
        <CatalogIitemModal
          isOpen={true}
          onClose={handleModalClose}
          itemData={selectedProduct}
        />
      )}
    </div>
  );
}
