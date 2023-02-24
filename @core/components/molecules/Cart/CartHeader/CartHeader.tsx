import React from 'react';

import Flex from '../../../atoms/Flex/Flex';
import Text from '../../../atoms/Text/Text';
import Styles from './CartHeader.module.scss';

function CartHeader() {
  return (
    <Flex variant="btwn_end" className={Styles.cart_header}>
      <Text variant="body_xlarge" className={Styles.cart_header_title}>
        Shopping Cart
      </Text>
      <Text variant="body_large_2">Price</Text>
    </Flex>
  );
}

export default CartHeader;
