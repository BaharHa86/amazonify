import React from 'react';

import Flex from '../../atoms/Flex/Flex';
import Logo from '../../molecules/Logo/Logo';
import SigninSection from '../../organisms/SigninSection/SigninSection';
import Styles from './SigninTemplate.module.scss';

function SigninTemplate() {
  return (
    <Flex variant="col_cntr_strt" className={Styles.signin_template}>
      <Logo variant="black" />
      <SigninSection />
    </Flex>
  );
}

export default SigninTemplate;
