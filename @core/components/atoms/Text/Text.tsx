import React from 'react';

import styles from './Text.module.scss';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant:
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'H5'
    | 'H6'
    | 'H7'
    | 'H8'
    | 'H9'
    | 'body_xlarge'
    | 'body_xlarge_2'
    | 'body_large_1'
    | 'body_large_2'
    | 'body_medium_1'
    | 'body_medium_2'
    | 'body_small_1'
    | 'body_small_2';
}

function Text({ children, variant, className, ...rest }: TextProps) {
  const classes = `${className} ${styles[variant]}`;

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
}

export default Text;
