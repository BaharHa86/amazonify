import React, { ReactNode } from 'react';

import Styles from './Optionscard.module.scss';

interface OptionsCardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  variant: 'signin';
}

function OptionsCard({ children, className, variant }: OptionsCardProps) {
  const outerBoxClasses = `${Styles.outer_box} ${Styles[variant]} ${className}`;

  return (
    <div className={outerBoxClasses}>
      <div className={Styles.rotated_box} />
      <div>{children}</div>
    </div>
  );
}

export default OptionsCard;
