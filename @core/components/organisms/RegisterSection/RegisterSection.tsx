import React from 'react';

import Text from '../../atoms/Text/Text';
import Styles from './RegisterSection.module.scss';
import Flex from '../../atoms/Flex/Flex';
import Condition from '../../molecules/SigninFieldes/Condition/condition';
import RegisterForm from '../../molecules/SigninFieldes/RegisterForm/RegisterForm';
function RegisterSection() {
  return (
    <Flex variant="col_strt_strt" className={Styles.register_section}>
      <Text variant="body_xlarge">Create account</Text>
      <RegisterForm />
      <Condition />
    </Flex>
  );
}

export default RegisterSection;
