import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import Flex from '../../../atoms/Flex/Flex';
import Text from '../../../atoms/Text/Text';
import Rating from '../Rating/Rating';
import Price from '../Price/Price';
import Styles from './ItemCard.module.scss';

interface ItemCardProps {
  title: string;
  slug: string;
  url: string;
  description: string;
  price: number;
  width: number;
  height: number;
  currentPath: string;
}

function ItemCard({
  title,
  slug,
  url,
  description,
  price,
  width,
  height,
  currentPath,
}: ItemCardProps) {
  return (
    <Flex variant="col_strt_strt" className={Styles.item_card_outer}>
      <Flex variant="cntr_cntr" className={Styles.item_card_image}>
        <Link href={`${currentPath}/${slug}`}>
          <Image src={url} alt={title} width={width} height={height} />
        </Link>
      </Flex>
      <Flex variant="col_strt_btwn" className={Styles.item_card_inner}>
        <Link href={`${currentPath}/${slug}`}>
          <Text variant="body_large_2" className={Styles.item_card_desc}>
            {description}
          </Text>
        </Link>
        <Rating />
        <Price price={price} />
      </Flex>
    </Flex>
  );
}

export default ItemCard;
