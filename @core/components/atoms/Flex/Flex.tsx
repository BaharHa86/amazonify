import React, { ReactNode } from 'react';

import Styles from './Flex.module.scss';

interface FlexProps extends React.AllHTMLAttributes<HTMLDivElement> {
  variant?:
    | 'col_strt_cntr'
    | 'col_cntr_cntr'
    | 'cntr_cntr'
    | 'arnd_cntr'
    | 'col_cntr_strt'
    | 'col_strt_strt'
    | 'btwn_cntr'
    | 'col_cntr_btwn'
    | 'btwn_end'
    | 'col_strt_btwn'
    | 'strt_cntr'
    | 'strt_strt'
    | 'end_strt'
    | 'cntr_end';
}

function Flex({ children, className, variant, ...rest }: FlexProps) {
  let classes = `${Styles.flex} ${className}`;

  if (variant) {
    classes = `${Styles.flex} ${Styles[variant]} ${className}`;
  }

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export default Flex;
