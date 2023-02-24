import React from 'react';

import Flex from '../../../atoms/Flex/Flex';
import Icon from '../../../atoms/Icon/Icon';

function Rating() {
  return (
    <Flex>
      <Icon variant="star" />
      <Icon variant="star" />
      <Icon variant="star" />
      <Icon variant="star_half" />
      <Icon variant="star_outline" />
    </Flex>
  );
}

export default Rating;
