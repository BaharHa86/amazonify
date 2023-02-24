import React from 'react';

import Flex from '../../atoms/Flex/Flex';
import CartItem from '../../molecules/Cart/CartItem/CartItem';
import { cartItem } from '../../../types/types';

interface CartProps {
  cartItems: cartItem[];
}

function Cart({ cartItems }: CartProps) {
  return (
    <Flex variant="col_cntr_strt">
      {cartItems.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.slug}
            slug={cartItem.slug}
            title={cartItem.title}
            image={cartItem.image}
            description={cartItem.description}
            price={cartItem.price}
            quantity={cartItem.quantity}
          />
        );
      })}
    </Flex>
  );
}

export default Cart;
