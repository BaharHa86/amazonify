import React from 'react';

import Button from '../../../../atoms/Button/Button';
import Flex from '../../../../atoms/Flex/Flex';
import Icon from '../../../../atoms/Icon/Icon';
import Text from '../../../../atoms/Text/Text';
import Styles from './MobileSignin.module.scss';

function MobileSigni() {
  return (
    <Button
      variant="nav_button"
      href="/signin"
      className={Styles.mobile_signin}
    >
      <Flex variant="btwn_cntr">
        <Text variant="body_xlarge_2">Sign in</Text>
        <Icon variant="signin" />
      </Flex>
    </Button>
  );
}

export default MobileSigni;
