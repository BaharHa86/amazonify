import React from 'react';

import Flex from '../../../atoms/Flex/Flex';
import Text from '../../../atoms/Text/Text';
import Styles from './CartTotal.module.scss';

interface CartTotalProps {
  totalQuantity: number;
  totalPrice: number;
}

function CartTotal({ totalQuantity, totalPrice }: CartTotalProps) {
  const fixedTotalPrice = totalPrice.toFixed(2);
  return (
    <Flex variant="end_strt" className={Styles.cart_total}>
      <Text variant="body_large_1">Subtotal ({totalQuantity} item):</Text>
      <Text variant="H4" className={Styles.cart_total_price}>
        ${fixedTotalPrice}
      </Text>
    </Flex>
  );
}

export default CartTotal;
