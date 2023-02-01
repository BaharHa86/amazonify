import React from 'react';
import Button from '../../../atoms/Button/Button';
import Flex from '../../../atoms/Flex/Flex';
import Text from '../../../atoms/Text/Text';
import Price from '../Price/Price';
import ProductSlider from '../ProductSlider/ProductSlider';
import Rating from '../Rating/Rating';
import Styles from './ProductDetail.module.scss';

interface ProductDetailProps {
  id: string;
  title: string;
  description?: string;
  images: {
    _id: string;
    url: string;
    sizes: number[];
  }[];
  price: number[];
}

function ProductDetail({
  id,
  title,
  description,
  images,
  price,
}: ProductDetailProps) {
  return (
    <Flex variant='arnd_cntr' className={Styles.product}>
      <ProductSlider images={images} title={title} />
      <Flex variant="col_strt_strt" className={Styles.product_detail}>
        <Text variant="body_xlarge_2" className={Styles.product_detail_desc}>
          {description}
        </Text>
        <Rating />
        <Price price={price} />
      </Flex>
      <Flex variant='col_cntr_cntr' className={Styles.product_button}>
        <Button variant="add_to_cart">Add to Cart</Button>
        <Button variant="buy_now">Buy Now</Button>
      </Flex>
    </Flex>
  );
}

export default ProductDetail;
