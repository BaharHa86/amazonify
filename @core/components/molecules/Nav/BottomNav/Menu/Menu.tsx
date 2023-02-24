import React from 'react';

import Button from '../../../../atoms/Button/Button';
import Icon from '../../../../atoms/Icon/Icon';
import Text from '../../../../atoms/Text/Text';
import Styles from './Menu.module.scss';

function Menu() {
  return (
    <Button
      variant="nav_button"
      style={{ alignItems: 'center' }}
      className={Styles.menu}
    >
      <Icon variant="menu" />
      <Text variant="H7">All</Text>
    </Button>
  );
}

export default Menu;
