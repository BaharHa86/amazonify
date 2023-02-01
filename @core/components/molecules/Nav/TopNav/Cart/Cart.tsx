import React from 'react';

import Text from '../../../../atoms/Text/Text';
import Flex from '../../../../atoms/Flex/Flex';

import styles from './Cart.module.scss';
import Icon from '../../../../atoms/Icon/Icon';
import Button from '../../../../atoms/Button/Button';

function Cart() {
  return (
    <Button variant="nav_button" href="">
      <Flex className={styles.cart_box}>
        <Text variant="H5" className={styles.cart_quantity}>
          15
        </Text>
        <Icon variant="cart" />
      </Flex>
      <Text variant="H7">Cart</Text>
    </Button>
  );
}

export default Cart;
