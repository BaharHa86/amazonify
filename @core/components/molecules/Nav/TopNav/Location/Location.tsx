import React from 'react';

import Icon from '../../../../atoms/Icon/Icon';
import Text from '../../../../atoms/Text/Text';
import Styles from './Location.module.scss';
import Flex from '../../../../atoms/Flex/Flex';
import Button from '../../../../atoms/Button/Button';

const Location = () => {
  return (
    <Button type="button" variant="nav_button" className={Styles.location}>
      <div>
        <Icon variant="location" />
      </div>
      <Flex variant="col_strt_cntr">
        <Text variant="body_small_1" className={Styles.deliver}>
          Deliver to
        </Text>
        <Text variant="H7">Select your address</Text>
      </Flex>
    </Button>
  );
};

export default Location;
