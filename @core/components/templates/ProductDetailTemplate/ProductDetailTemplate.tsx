import React from 'react';

import ProductDetail from '../../molecules/Product/ProductDetail/ProductDetail';
import Styles from './ProductDetailTemplate.module.scss';
import { product } from '../../../types/types';

function ProductDetailTemplate({
  slug,
  title,
  description,
  images,
  price,
}: product) {
  return (
    <main className={Styles.product_detail}>
      <ProductDetail
        slug={slug}
        title={title}
        description={description}
        images={images}
        price={price}
      />
    </main>
  );
}

export default ProductDetailTemplate;
