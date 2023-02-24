import React, { useEffect, useState } from 'react';
import CartTemplate from '../../@core/components/templates/CartTemplate/CartTemplate';
import { useAppSelector } from '../../@core/hook/hooks';

function CartPage() {
  const cart = useAppSelector((state) => state.cart);

  return <CartTemplate cart={cart} />;
}

export default CartPage;
