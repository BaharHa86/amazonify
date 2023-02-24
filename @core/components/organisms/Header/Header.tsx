import React from 'react';

import BottomNav from './BottomNav/BottomNav';
import TopNav from './TopNav/TopNav';
import Styles from './Header.module.scss';
import SearchBox from '../../molecules/Nav/TopNav/SearchBox/SearchBox';

const Header = () => {
  return (
    <header className={Styles.header}>
      <TopNav />
      <SearchBox className={Styles.searchbox} />
      <BottomNav />
    </header>
  );
};

export default Header;
