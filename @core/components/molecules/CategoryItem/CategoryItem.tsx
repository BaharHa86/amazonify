import React from 'react';
import Flex from '../../atoms/Flex/Flex';
import Styles from './CategoryItem.module.scss';
import LinkBox from '../../atoms/LinkBox/LinkBox';
import Text from '../../atoms/Text/Text';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryItemProps {
  variant: 'simple' | 'wide';
  title: string;
  url?: string;
  images?: { _id: string; url: string }[];
  className?: string;
  href?:string;
}

function CategoryItem({
  variant,
  title,
  url = '',
  href='',
  images,
  className,
}: CategoryItemProps) {
  const classes = `${Styles[variant]} ${className}`;

  if (variant === 'simple') {
    return (
      <Flex variant="col_strt_cntr" className={classes}>
        <Text variant="H4">{title}</Text>
        <Flex className={Styles.test}>
          <Link href={href}>
            <Image src={url} alt={title} width={250} height={300} />
          </Link>
        </Flex>
        <LinkBox>Shop now</LinkBox>
      </Flex>
    );
  }

  return (
    <Flex variant="col_strt_cntr" className={classes}>
      <Text variant="H4">{title}</Text>

      <Flex variant="arnd_cntr" className={Styles.wide_images}>
        {images?.map((image) => {
          return (
            <Link href={href} key={image._id} style={{ margin: '0 20px' }}>
              <Image src={image.url} alt={title} width={150} height={200} />
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default CategoryItem;
