import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getError } from '../../../../../lib/error';

import Button from '../../../atoms/Button/Button';
import Flex from '../../../atoms/Flex/Flex';
import Label from '../../../atoms/InputFieldes/Lable/Label';
import TextInput from '../../../atoms/InputFieldes/TextInput/TextInput';
import Styles from './SigninForm.module.scss';

interface Inputs {
  email: string;
  password: string;
}

function SigninForm() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push('/');
    }
  }, [router, session]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const submitHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Flex variant="col_cntr_cntr" className={Styles.signin_form}>
        <Flex variant="col_strt_cntr" className={Styles.signin_input}>
          <Label htmlFor="email" variant="signin">
            Email or mobile phone number
          </Label>
          <TextInput
            {...register('email', {
              required: 'please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            type="email"
            id="email"
            variant="signin"
          />
          {errors.email && <div>{errors.email.message}</div>}
        </Flex>
        <Flex variant="col_strt_cntr" className={Styles.signin_input}>
          <Label htmlFor="password" variant="signin">
            Password
          </Label>
          <TextInput
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            type="password"
            id="password"
            variant="signin"
          />
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </Flex>
        <Button type="submit" variant="signin">
          Sign in
        </Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
