import React from 'react';

import Grid from '../../atoms/Grid/Grid';
import ItemCard from '../../molecules/Product/ItemCard/ItemCard';
import { product } from '../../../types/types';

interface ProductsProps {
  products: product[];
  currentPath: string;
}

function Products({ products, currentPath }: ProductsProps) {
  return (
    <Grid variant="col_3">
      {products.map((product) => {
        return (
          <ItemCard
            key={product.slug}
            title={product.title}
            slug={product.slug}
            url={product.images[0].url}
            description={product.description}
            price={product.price}
            width={product.images[0].sizes[0]}
            height={product.images[0].sizes[1]}
            currentPath={currentPath}
          />
        );
      })}
    </Grid>
  );
}

export default Products;
