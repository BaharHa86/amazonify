import React from 'react';

import Styles from './TopNav.module.scss';
import Logo from '../../../molecules/Logo/Logo';
import Location from '../../../molecules/Nav/TopNav/Location/Location';
import SearchBox from '../../../molecules/Nav/TopNav/SearchBox/SearchBox';
import Language from '../../../molecules/Nav/TopNav/Language/Language';
import Signin from '../../../molecules/Nav/TopNav/Signin/Signin';
import Orders from '../../../molecules/Nav/TopNav/Orders/Orders';
import Cart from '../../../molecules/Nav/TopNav/Cart/Cart';
import Flex from '../../../atoms/Flex/Flex';
import MobileMenu from '../../../molecules/Nav/TopNav/MobileMenu/MobileMenu';
import MobileSignin from '../../../molecules/Nav/TopNav/MobileSignin/MobileSignin';

const TopNav = () => {
  return (
    <nav>
      <Flex variant="btwn_cntr" className={Styles.top_nav}>
        <Flex variant="cntr_cntr">
          <MobileMenu />
          <Logo variant="white" />
        </Flex>
        <Location />
        <SearchBox className={Styles.searchbox} />
        <Language />
        <Flex variant="cntr_cntr">
          <Signin />
          <MobileSignin />
          <Orders />
          <Cart />
        </Flex>
      </Flex>
    </nav>
  );
};

export default TopNav;
