import React, { forwardRef } from 'react';

import styles from './TextInput.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'search' | 'signin' | 'register' | 'cart';
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ variant, className, ...rest }, ref) {
    const classes = `${styles.input} ${styles[variant]} ${className}`;

    return <input className={classes} {...rest} ref={ref} />;
  }
);

export default TextInput;
