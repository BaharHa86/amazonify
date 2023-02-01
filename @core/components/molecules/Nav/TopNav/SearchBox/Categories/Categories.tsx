import React from 'react';
import Select from '../../../../../atoms/InputFieldes/Select/Select';
import styles from './Categories.module.scss';
import SearchCategories from '../../../../../../data/searchCategories';

import Icon from '../../../../../atoms/Icon/Icon';
import Flex from '../../../../../atoms/Flex/Flex';

const Categories = () => {
  return (
    <Flex className={styles.categories_box}>
      <Select
        name="categories"
        title="All"
        id="categories"
        variant="search"
        optionItems={SearchCategories}
      />
      <Icon variant="tr_down" className={styles.categories_icon} />
    </Flex>
  );
};

export default Categories;
