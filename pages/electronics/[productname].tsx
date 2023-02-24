import React from 'react';
import { useRouter } from 'next/router';

import ProductDetailTemplate from '../../@core/components/templates/ProductDetailTemplate/ProductDetailTemplate';
import db from '../../lib/db';
import Product from '../../models/Product';
import { product, dbProduct } from '../../@core/types/types';

interface productDetailProps {
  products: product[];
}

function ProductDetailPage({ products }: productDetailProps) {
  const router = useRouter();
  const currentSlug = router.query.productname;
  const product = products.find((item) => item.slug === currentSlug);

  if (!product) {
    return <div>not found</div>;
  }
  const { slug, title, description, images, price } = product;

  return (
    <ProductDetailTemplate
      slug={slug}
      title={title}
      description={description}
      images={images}
      price={price}
    />
  );
}

export default ProductDetailPage;

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
