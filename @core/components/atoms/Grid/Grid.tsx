import React from 'react'
import Styles from './Grid.module.scss';

interface GridProps extends React.AllHTMLAttributes<HTMLDivElement>{
    variant:'col_4' | 'col_3';
   }

function Grid({children, className,variant, ...rest}:GridProps) {

const  classes = `${Styles.grid} ${Styles[variant]} ${className}`;

return (
    <div className={classes} {...rest}>
     {children}
    </div>
  )
}

export default Grid