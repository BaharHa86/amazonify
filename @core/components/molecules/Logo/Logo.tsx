import React from 'react';
import Button from '../../atoms/Button/Button';
 
import Text from '../../atoms/Text/Text';
import Styles from './Logo.module.scss';

interface LogoProps{
  variant:'white' | 'black';
}
 

const Logo = ({variant}:LogoProps) => {
  
  
  return (
      <Button type='button' variant='nav_button' style={{alignItems:'center'}} href='/'>
      <Text variant='H1' className={Styles[variant]}>amazon<span className={Styles.color}>ify</span></Text>
      </Button>

   
  );
};

export default Logo;
