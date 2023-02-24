import React from 'react';
import { useRouter } from 'next/router';
import ProductTemplate from '../../@core/components/templates/ProductsTemplate/ProductTemplate';
import db from '../../lib/db';
import Product from '../../models/Product';
import { product, dbProduct } from '../../@core/types/types';

interface healthPersonalCarePageProps {
  products: product[];
}

function HealthPersonalCarePage({ products }: healthPersonalCarePageProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  return <ProductTemplate products={products} currentPath={currentPath} />;
}

export default HealthPersonalCarePage;

export async function getServerSideProps() {
  await db.connect();
  const products: Array<dbProduct> = await Product.find({
    category: 'healthPersonalCare',
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
