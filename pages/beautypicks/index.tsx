import React from 'react';
import { useRouter } from 'next/router';
import ProductTemplate from '../../@core/components/templates/ProductsTemplate/ProductTemplate';
import db from '../../lib/db';
import Product from '../../models/Product';
import { product, dbProduct } from '../../@core/types/types';

interface beautyPicksPageProps {
  products: product[];
}

function BeautyPicksPage({ products }: beautyPicksPageProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  return <ProductTemplate products={products} currentPath={currentPath} />;
}

export default BeautyPicksPage;

export async function getServerSideProps() {
  await db.connect();
  const products: Array<dbProduct> = await Product.find({
    category: 'beautyPicks',
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
