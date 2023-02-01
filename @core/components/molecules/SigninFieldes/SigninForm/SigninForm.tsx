import React from 'react';
import Button from '../../../atoms/Button/Button';
import Flex from '../../../atoms/Flex/Flex';
import Label from '../../../atoms/InputFieldes/Lable/Label';
import TextInput from '../../../atoms/InputFieldes/TextInput/TextInput';
import Styles from './SigninForm.module.scss';

function SigninForm() {
  return (
    <form>
      <Flex variant='col_cntr_cntr' className={Styles.signin_form}>
        <Flex variant='col_strt_cntr' className={Styles.signin_input}>
          <Label variant="signin">Email or mobile phone number</Label>
          <TextInput type="text" variant="signin" />
        </Flex>
        <Flex variant='col_strt_cntr' className={Styles.signin_input}>
          <Label variant="signin">Password</Label>
          <TextInput type="text" variant="signin" />
        </Flex>
        <Button variant="signin">Sign in</Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
