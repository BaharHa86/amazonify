import React, { ReactNode } from 'react';
import Box from '../Flex/Flex';
import LinkBox from '../LinkBox/LinkBox';
import styles from './Optionscard.module.scss';

interface OptionsCardProps extends React.AllHTMLAttributes<HTMLDivElement> {}

function OptionsCard({ children, className }: OptionsCardProps) {
  const outerBoxClasses = `${styles.outer_box} ${className}`;

  return (
    <div className={outerBoxClasses}>
      <div className={styles.rotated_box} />
      <div>{children}</div>
    </div>
  );
}

export default OptionsCard;
