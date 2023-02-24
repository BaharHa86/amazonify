import React from 'react';

import styles from './select.module.scss';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant: 'search';
  title: string;
  optionItems: string[];
}

function Select({ title, optionItems, className, variant }: SelectProps) {
  const classes = `${styles.select} ${styles[variant]} ${className}`;

  return (
    <select className={classes}>
      <option value="">{title}</option>
      {optionItems.map((optionItem) => {
        return (
          <option value={optionItem} key={optionItem}>
            {optionItem}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
