import React from 'react';
import Text from '../../../../atoms/Text/Text';

import Button from '../../../../atoms/Button/Button';
import Flex from '../../../../atoms/Flex/Flex';

function Orders() {
  return (
    <Button variant="nav_button" href="">
      <Flex variant="col_strt_cntr">
        <Text variant="body_small_1">Returns</Text>
        <Text variant="H7">& Orders</Text>
      </Flex>
    </Button>
  );
}

export default Orders;
