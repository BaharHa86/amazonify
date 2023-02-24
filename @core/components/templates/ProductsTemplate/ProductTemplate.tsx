import React from 'react';

import Products from '../../organisms/Products/Products';
import Styles from './ProductTemplate.module.scss';
import { product } from '../../../types/types';

interface ProductTemplateProps {
  products: product[];
  currentPath: string;
}

function ProductTemplate({ products, currentPath }: ProductTemplateProps) {
  return (
    <main className={Styles.products}>
      <Products products={products} currentPath={currentPath} />
    </main>
  );
}

export default ProductTemplate;
