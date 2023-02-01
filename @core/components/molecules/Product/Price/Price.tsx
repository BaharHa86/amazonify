import React from 'react'
import Flex from '../../../atoms/Flex/Flex'
import Text from '../../../atoms/Text/Text'
  
interface PriceProps{
    price:number[];
}

function Price({price}:PriceProps) {

    
  return (
    <Flex>
        <sup><Text variant='body_medium_2'>$</Text></sup>
        <Text variant='body_xlarge'>{price[0]}</Text>
        <sup><Text variant='body_medium_2'>{price[1]}</Text></sup>
    </Flex>
  )
}

export default Price