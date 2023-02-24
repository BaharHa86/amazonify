import React from 'react';

import styles from './Lable.module.scss';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant: 'signin' | 'cart';
}
function Label({ children, className, variant, ...rest }: LabelProps) {
  const classes = `${className} ${styles.lable} ${styles[variant]}`;
  return (
    <label className={classes} {...rest}>
      {children}
    </label>
  );
}

export default Label;
