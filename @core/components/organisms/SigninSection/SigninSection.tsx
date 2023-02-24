import React from 'react';

import Text from '../../atoms/Text/Text';
import Styles from './SigninSection.module.scss';
import Flex from '../../atoms/Flex/Flex';
import SigninForm from '../../molecules/SigninFieldes/SigninForm/SigninForm';
import Condition from '../../molecules/SigninFieldes/Condition/condition';
import CreateNew from '../../molecules/SigninFieldes/CreateNew/CreateNew';

function SigninSection() {
  return (
    <Flex variant="col_cntr_strt" className={Styles.wrapper}>
      <Flex variant="col_strt_strt" className={Styles.signin_section}>
        <Text variant="body_xlarge">Sign in</Text>
        <SigninForm />
        <Condition />
      </Flex>
      <CreateNew />
    </Flex>
  );
}

export default SigninSection;
