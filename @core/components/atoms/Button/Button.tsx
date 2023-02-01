import Link from 'next/link';
import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends  React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant:'nav_button' | 'search' | 'back_to_top' | 'signin' | 'create_new'|'add_to_cart'|'buy_now';
    size?:'xs'; 
    href?:string;
   
}
interface LinkButtonProps extends  React.AnchorHTMLAttributes<HTMLAnchorElement>{

}

function Button({children,variant,size,className,href='',...rest}:ButtonProps,{...restlinkprops}:LinkButtonProps) {
   
  let classes=`${styles.btn} ${styles[variant]} ${className}`;
  if(size){
     classes=`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;
  }
  

  
   
  
   if(variant==='nav_button' || variant ==='back_to_top' || variant==='create_new'){
    return(
      <Link href={href} {...restlinkprops} legacyBehavior >
      <button className={classes} {...rest}>
        {children}
      </button>
      </Link>
      );
      
   }
  
  return (
      <button   className={classes} {...rest} >
        {children}
      </button>
     )
 
 
}

export default Button