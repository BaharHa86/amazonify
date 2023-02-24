import React from 'react';

import Flex from '../../atoms/Flex/Flex';
import Logo from '../../molecules/Logo/Logo';
import RegisterSection from '../../organisms/RegisterSection/RegisterSection';
import Styles from './RegisterTemplate.module.scss';

function RegisterTemplate() {
  return (
    <Flex variant="col_cntr_strt" className={Styles.register_template}>
      <Logo variant="black" />
      <RegisterSection />
    </Flex>
  );
}

export default RegisterTemplate;
