import React from 'react';

import Button from '../../../../atoms/Button/Button';
import Icon from '../../../../atoms/Icon/Icon';
import Styles from './MobileMenu.module.scss';

function MobileMenu() {
  return (
    <Button variant="nav_button" className={Styles.mobile_menu}>
      <Icon variant="menu" />
    </Button>
  );
}

export default MobileMenu;
