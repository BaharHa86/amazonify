import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { useAppDispatch } from '../../../../hook/hooks';
import { cartActions } from '../../../../store/cart-slice';

import Button from '../../../atoms/Button/Button';
import Flex from '../../../atoms/Flex/Flex';
import Label from '../../../atoms/InputFieldes/Lable/Label';
import TextInput from '../../../atoms/InputFieldes/TextInput/TextInput';
import Text from '../../../atoms/Text/Text';
import Styles from './CartItem.module.scss';
import { cartItem } from '../../../../types/types';

function CartItem({
  slug,
  title,
  image,
  description,
  price,
  quantity,
}: cartItem) {
  const [quantityValue, setQuantityValue] = useState(quantity);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const deleteItemFromCartHandler = () => {
    dispatch(cartActions.deleteItemFromCart(slug));
  };

  const updateCartItemHandler = () => {
    if (inputRef.current) {
      if (inputRef.current?.value !== '') {
        const currentQuantity = +inputRef.current?.value;
        setQuantityValue(currentQuantity);
        dispatch(cartActions.updateCartItem({ slug, currentQuantity }));
      }
    }
  };
  return (
    <Flex variant="strt_strt" className={Styles.cart_item}>
      <Flex>
        <Image
          src={image.url}
          alt={title}
          className={Styles.cart_item_image}
          width={image.sizes[0]}
          height={image.sizes[1]}
        />
      </Flex>
      <Flex variant="col_strt_btwn" className={Styles.cart_item_detail}>
        <Text variant="body_large_1" className={Styles.cart_item_desc}>
          {description}
        </Text>
        <Text variant="body_large_1" className={Styles.cart_item_title}>
          {title}
        </Text>
        <Flex variant="btwn_cntr" className={Styles.cart_item_quantity}>
          <Flex variant="strt_cntr" className={Styles.cart_item_input}>
            <Label variant="cart">Qty:</Label>
            <TextInput
              type="number"
              variant="cart"
              ref={inputRef}
              onChange={updateCartItemHandler}
              value={quantityValue}
              min="0"
              max="20"
            />
          </Flex>
          <Button variant="delete_cart" onClick={deleteItemFromCartHandler}>
            Delete
          </Button>
        </Flex>
      </Flex>
      <Text variant="H4">{`$${price}`}</Text>
    </Flex>
  );
}

export default CartItem;
