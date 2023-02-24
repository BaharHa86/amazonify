import React from 'react';

import Flex from '../../atoms/Flex/Flex';
import CartHeader from '../../molecules/Cart/CartHeader/CartHeader';
import CartTotal from '../../molecules/Cart/CartTotal/CartTotal';
import Cart from '../../organisms/Cart/Cart';
import Styles from './CartTemplate.module.scss';
import { cart } from '../../../types/types';

interface CartTemplateProps {
  cart: cart;
}

function CartTemplate({ cart }: CartTemplateProps) {
  return (
    <main>
      <Flex variant="col_cntr_strt" className={Styles.cart}>
        <CartHeader />
        <Cart cartItems={cart.cartItems} />
        <CartTotal
          totalQuantity={cart.totalQuantity}
          totalPrice={cart.totalPrice}
        />
      </Flex>
    </main>
  );
}

export default CartTemplate;
