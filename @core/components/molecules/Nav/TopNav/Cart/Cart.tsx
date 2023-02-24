import React from 'react';

import { useAppSelector } from '../../../../../hook/hooks';

import Text from '../../../../atoms/Text/Text';
import Styles from './Cart.module.scss';
import Icon from '../../../../atoms/Icon/Icon';
import Button from '../../../../atoms/Button/Button';

function Cart() {
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <Button variant="nav_button" href="/cart">
      <div className={Styles.cart_box}>
        <Text variant="H5" className={Styles.cart_quantity}>
          {cartQuantity}
        </Text>
        <Icon variant="cart" />
      </div>
      <Text variant="H7" className={Styles.cart_text}>
        Cart
      </Text>
    </Button>
  );
}

export default Cart;
