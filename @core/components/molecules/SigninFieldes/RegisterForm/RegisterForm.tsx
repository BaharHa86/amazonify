import React, { FormEvent, useRef } from 'react';

import Button from '../../../atoms/Button/Button';
import Flex from '../../../atoms/Flex/Flex';
import Label from '../../../atoms/InputFieldes/Lable/Label';
import TextInput from '../../../atoms/InputFieldes/TextInput/TextInput';
import Styles from './RegisterForm.module.scss';

function RegisterForm() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  async function createUser(
    name: string | undefined,
    email: string | undefined,
    password: string | undefined
  ) {
    const response = await fetch('/api/auth/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'something went wrong!');
    }
    return data;
  }
  async function submitHandler(event: FormEvent) {
    event.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    // validation

    try {
      const result = await createUser(
        enteredName,
        enteredEmail,
        enteredPassword
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Flex variant="col_cntr_cntr" className={Styles.register_form}>
        <Flex variant="col_strt_cntr" className={Styles.register_input}>
          <Label variant="signin">Your name</Label>
          <TextInput
            type="text"
            variant="signin"
            id="name"
            ref={nameInputRef}
          />
        </Flex>
        <Flex variant="col_strt_cntr" className={Styles.register_input}>
          <Label variant="signin">Email or mobile phone number</Label>
          <TextInput
            type="text"
            variant="signin"
            id="email"
            ref={emailInputRef}
          />
        </Flex>
        <Flex variant="col_strt_cntr" className={Styles.register_input}>
          <Label variant="signin">Password</Label>
          <TextInput
            type="text"
            variant="signin"
            id="password"
            ref={passwordInputRef}
          />
        </Flex>
        <Flex variant="col_strt_cntr" className={Styles.register_input}>
          <Label variant="signin">Re-enter password</Label>
          <TextInput type="text" variant="signin" />
        </Flex>
        <Button variant="signin">Verify email</Button>
      </Flex>
    </form>
  );
}

export default RegisterForm;
