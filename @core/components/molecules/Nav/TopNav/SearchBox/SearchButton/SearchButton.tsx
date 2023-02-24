import React from 'react';

import Button from '../../../../../atoms/Button/Button';
import Icon from '../../../../../atoms/Icon/Icon';

function SearchButton() {
  return (
    <Button type="submit" variant="search">
      <Icon variant="search" />
    </Button>
  );
}

export default SearchButton;
