import React from 'react';

import { CgShoppingCart } from 'react-icons/cg';
import { IoPersonOutline } from 'react-icons/io5';
import { RxTriangleDown, RxTriangleRight } from 'react-icons/rx';
import { TiLocationOutline } from 'react-icons/ti';
import { TbSearch } from 'react-icons/tb';
import { FiMenu } from 'react-icons/fi';
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from 'react-icons/io';

import styles from './Icon.module.scss';

interface IconProps {
  variant:
    | 'cart'
    | 'tr_down'
    | 'tr_right'
    | 'location'
    | 'search'
    | 'menu'
    | 'star'
    | 'star_outline'
    | 'star_half'
    | 'signin';
  className?: string;
}

function Icon({ variant, className }: IconProps) {
  const classes = `${styles[variant]} ${className}`;

  switch (variant) {
    case 'cart':
      return <CgShoppingCart className={classes} />;
      break;
    case 'tr_down':
      return <RxTriangleDown className={classes} />;
      break;
    case 'tr_right':
      return <RxTriangleRight className={classes} />;
      break;

    case 'location':
      return <TiLocationOutline className={classes} />;

      break;

    case 'search':
      return <TbSearch className={classes} />;
      break;
    case 'menu':
      return <FiMenu className={classes} />;
      break;
    case 'star':
      return <IoMdStar className={classes} />;
      break;
    case 'star_outline':
      return <IoMdStarOutline className={classes} />;
      break;
    case 'star_half':
      return <IoMdStarHalf className={classes} />;
      break;

    case 'signin':
      return <IoPersonOutline className={classes} />;
      break;
  }
}

export default Icon;
