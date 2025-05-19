// src/pages/home.tsx

import { Grid, Container } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogItem from '@/components/catalog/CatalogItem';
import { mockProducts } from '@/data/mockdata';
import { setProducts } from '@/store/actions/productactions';
import type { ProductType } from '@/types/types';

export default function HomePage(): React.JSX.Element {
  const dispatch = useDispatch();
  const productsList = useSelector((state: any) => state.products.list);

  React.useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, []);

  return (
    <div className="home-page">
      <h1>Интернет-магазин электроники</h1>
      <Container sx={{ padding: '20px 0' }}>
        <Grid container spacing={2}>
          {productsList.length > 0 ? (
            productsList.map((product: ProductType) => (
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
