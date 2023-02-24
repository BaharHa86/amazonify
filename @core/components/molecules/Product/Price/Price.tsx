import React from 'react';

import Flex from '../../../atoms/Flex/Flex';
import Text from '../../../atoms/Text/Text';

interface PriceProps {
  price: number;
}

function Price({ price }: PriceProps) {
  const intPrice = Math.trunc(price);
  const decPrice = +(price % 1).toFixed(2).substring(2);
  return (
    <Flex>
      <sup>
        <Text variant="body_medium_2">$</Text>
      </sup>
      <Text variant="body_xlarge">{intPrice}</Text>
      <sup>
        <Text variant="body_medium_2">{decPrice}</Text>
      </sup>
    </Flex>
  );
}

export default Price;
