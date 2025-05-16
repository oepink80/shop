// src/pages/home.tsx

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '@/store/actions/productactions';
import CatalogItem from '@/components/catalog/CatalogItem';
import { mockProducts } from '@/data/mockdata';
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
      <section className="catalog-section">
        {productsList.length > 0 ? (
          productsList.map((product: ProductType) => (
            <CatalogItem key={product.id} product={product} />
          ))
        ) : (
          <p>Нет товаров</p>
        )}
      </section>
    </div>
  );
}
