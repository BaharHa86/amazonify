import Image from 'next/image'
import React from 'react'
import Flex from '../../../atoms/Flex/Flex'
import Label from '../../../atoms/InputFieldes/Lable/Label';
import TextInput from '../../../atoms/InputFieldes/TextInput/TextInput';
import Text from '../../../atoms/Text/Text'

interface CartItemProps{
    _id:string;
    title:string;
    image:{
        _id:string;
        url:string;
        sizes:number[];
    };
    description:string;
    price:Number[];
}

function CartItem({_id,title,image, description,price}:CartItemProps) {
  return (
   <Flex>
    <Flex>
     <Image  src={image.url} alt={title} width={image.sizes[0]} height={image.sizes[1]}/>
    </Flex>
  <Flex>
    <Text variant='body_large_1'></Text>
    <Flex>
        <Label variant='cart'>Qty</Label>
        <TextInput type='number' variant='cart'/>
    </Flex>
  </Flex>
   <Text variant='H4'>{`$${price[0]}.${price[1]}`}</Text>
   </Flex>
  )
}

export default CartItem