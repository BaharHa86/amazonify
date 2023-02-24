import React from 'react';

import BottomFooter from '../../molecules/FooterItem/BottomFooter/BottomFooter';
import TopFooter from '../../molecules/FooterItem/TopFooter/TopFooter';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}

export default Footer;
