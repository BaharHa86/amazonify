import React from 'react';
import { useRouter } from 'next/router';
import ProductTemplate from '../../@core/components/templates/ProductsTemplate/ProductTemplate';
import db from '../../lib/db';
import Product from '../../models/Product';
import { product, dbProduct } from '../../@core/types/types';

interface electronicsPageProps {
  products: product[];
}

function ElectronicsPage({ products }: electronicsPageProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  return <ProductTemplate products={products} currentPath={currentPath} />;
}

export default ElectronicsPage;

export async function getServerSideProps() {
  await db.connect();
  const products: Array<dbProduct> = await Product.find({
    category: 'electronics',
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
