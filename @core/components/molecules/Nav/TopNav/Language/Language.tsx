import React from 'react';

import Image from 'next/image';
import Text from '../../../../atoms/Text/Text';
import Styles from './Language.module.scss';
import Icon from '../../../../atoms/Icon/Icon';
import Button from '../../../../atoms/Button/Button';
import Flex from '../../../../atoms/Flex/Flex';

function Language() {
  return (
    <Button variant="nav_button" href="" className={Styles.language}>
      <Flex variant="cntr_end" className={Styles.language_image}>
        <Image
          src="/images/countryflags/usa-flag.png"
          alt="usa-flag"
          width={20}
          height={20}
        />
      </Flex>
      <Text variant="H7">EN</Text>
      <Icon variant="tr_down" />
    </Button>
  );
}

export default Language;
