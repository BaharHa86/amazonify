import React from 'react';

import { signOut, useSession } from 'next-auth/react';
import { removeCookie } from 'typescript-cookie';

import Icon from '../../../../atoms/Icon/Icon';
import Text from '../../../../atoms/Text/Text';
import Flex from '../../../../atoms/Flex/Flex';
import OptionsCard from '../../../../atoms/OptionsCard/OptionsCard';
import Overlay from '../../../../atoms/Overlay/Overlay';
import Styles from './Signin.module.scss';
import Button from '../../../../atoms/Button/Button';

function Signin() {
  const { status, data: session } = useSession();

  const logoutHandler = () => {
    removeCookie('cart');
    signOut({ callbackUrl: '/signin' });
  };
  return (
    <div className={Styles.signin}>
      <Button variant="nav_button" href="/signin">
        <Flex variant="col_strt_cntr">
          <Text variant="body_small_1">
            {`Hello,
        ${
          status === 'loading'
            ? 'Loading'
            : session?.user
            ? session.user.name
            : 'sign in'
        }`}
          </Text>
          <Text variant="H7">Account & Lists</Text>
        </Flex>
        <Icon variant="tr_down" />
      </Button>
      <Flex>
        <Overlay variant="signin" className={Styles.signin_overlay} />
        <OptionsCard variant="signin" className={Styles.signin_options_card}>
          <Button
            type="button"
            variant="signout"
            href="#"
            onClick={logoutHandler}
          >
            Sign Out
          </Button>
        </OptionsCard>
      </Flex>
    </div>
  );
}

export default Signin;
