import Link from 'next/link';
import React from 'react';

import styles from './LinkBox.module.scss';

interface LinkBoxProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'nav_link' | 'slider_link' | 'flex_link' | 'signin_condition';
}

function LinkBox({
  children,
  className,
  href = '',
  variant,
  ...rest
}: LinkBoxProps) {
  let classes = `${styles.link_box} ${className}`;

  if (variant) {
    classes = `${styles[variant]} ${styles.link_box} ${className}`;
  }

  if (variant === 'nav_link') {
    return (
      <Link className={classes} href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Link className={classes} href={href} {...rest}>
      {children}
    </Link>
  );
}

export default LinkBox;
