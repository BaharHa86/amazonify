import React from 'react';
import Link from 'next/link';

import Flex from '../../atoms/Flex/Flex';
import Styles from './CategoryItem.module.scss';
import LinkBox from '../../atoms/LinkBox/LinkBox';
import Text from '../../atoms/Text/Text';
import Image from 'next/image';

interface CategoryItemProps {
  variant: 'simple' | 'wide';
  title: string;
  url?: string;
  images?: { _id: string; url: string }[];
  className?: string;
  href?: string;
}

function CategoryItem({
  variant,
  title,
  url = '',
  href = '',
  images,
  className,
}: CategoryItemProps) {
  const classes = `${Styles[variant]} ${className}`;

  if (variant === 'simple') {
    return (
      <Flex variant="col_strt_cntr" className={classes}>
        <Text variant="H4">{title}</Text>
        <Flex variant="strt_cntr" className={Styles.simple_wrapper}>
          <Link href={href} className={Styles.simple_wrapper_image}>
            <Image
              src={url}
              alt={title}
              className={Styles.simple_image}
              fill
              sizes="25vw"
            />
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
