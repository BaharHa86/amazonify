import Image from 'next/image';
import React from 'react';
import Flex from '../../../atoms/Flex/Flex';
import Text from '../../../atoms/Text/Text';
import Rating from '../Rating/Rating';
import Price from '../Price/Price';
import Styles from './ItemCard.module.scss';
import Overlay from '../../../atoms/Overlay/Overlay';
import Link from 'next/link';

interface ItemCardProps {
  title: string;
  url: string;
  description: string;
  price: number[];
  width:number;
  height:number;
  currentPath:string;
}

function ItemCard({ title, url, description, price,width,height,currentPath }: ItemCardProps) {
  return (
    <Flex variant='col_strt_strt' className={Styles.item_card_outer}>
      <Flex variant='cntr_cntr' className={Styles.item_card_image}>
        <Link href={`/${currentPath}/${title}`}>
        <Image src={url} alt={title} width={width} height={height} />
        </Link>
      </Flex>
      <Flex variant='col_strt_strt' className={Styles.item_card_inner}>
      <Link href={`/${currentPath}/${title}`}>
      <Text variant="body_large_1" className={Styles.item_card_desc}>{description}</Text>
      </Link>
      <Rating />
      <Price price={price} />
      </Flex>
    </Flex>
  );
}

export default ItemCard;
