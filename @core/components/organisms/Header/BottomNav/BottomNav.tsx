import React from 'react';

import Menu from '../../../molecules/Nav/BottomNav/Menu/Menu';
import styles from './BottomNav.module.scss';
import NavList from '../../../molecules/Nav/BottomNav/NavList/NavList';
import Flex from '../../../atoms/Flex/Flex';

function BottomNav() {
  return (
    <nav>
      <Flex variant="strt_cntr" className={styles.bottom_nav}>
        <Menu />
        <NavList />
      </Flex>
    </nav>
  );
}

export default BottomNav;
