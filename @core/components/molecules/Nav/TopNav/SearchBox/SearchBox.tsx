import React from 'react';

import Categories from './Categories/Categories';
import SearchButton from './SearchButton/SearchButton';
import Styles from './SearchBox.module.scss';
import TextInput from '../../../../atoms/InputFieldes/TextInput/TextInput';
import Flex from '../../../../atoms/Flex/Flex';

interface SearchBoxProps {
  className?: string;
}

function SearchBox({ className }: SearchBoxProps) {
  const classes = `${Styles.search} ${className}`;

  return (
    <form className={classes}>
      <Flex>
        <Categories />
        <TextInput type="search" variant="search" placeholder="Search Amazon" />
        <SearchButton />
      </Flex>
    </form>
  );
}

export default SearchBox;
