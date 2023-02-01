import Link from 'next/link';
import React from 'react';
import Icon from '../../../../atoms/Icon/Icon';
import Text from '../../../../atoms/Text/Text';
import Flex from '../../../../atoms/Flex/Flex';

import OptionsCard from '../../../../atoms/OptionsCard/OptionsCard';
import Overlay from '../../../../atoms/Overlay/Overlay';
import styles from './Signin.module.scss';
import Button from '../../../../atoms/Button/Button';

function Signin() {
  return (
    <Button variant="nav_button" href="/signin" className={styles.signin}>
      <Flex variant="col_strt_cntr">
        <Text variant="body_small_1">Hello,sign in</Text>
        <Text variant="H7">Account & Lists</Text>
      </Flex>
      <Icon variant="tr_down" />

      <Flex>
        <Overlay variant="signin" className={styles.signin_overlay} />
        <OptionsCard className={styles.signin_options_card}>
          <Link href="/signin" className={styles.signout}>
            Sign Out
          </Link>
        </OptionsCard>
      </Flex>
    </Button>
  );
}

export default Signin;
