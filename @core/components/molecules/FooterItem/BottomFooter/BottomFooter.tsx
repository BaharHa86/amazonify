import Link from 'next/link';
import React from 'react';
import Flex from '../../../atoms/Flex/Flex';
import Text from '../../../atoms/Text/Text';
import styles from './BottomFooter.module.scss';

function BottomFooter() {
  return (
    <Flex variant="col_cntr_cntr" className={styles.bottom_footer}>
      <ul className={styles.bottom_footer_box}>
        <li>
          <Link href="" className={styles.link}>
            Conditions of Use
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            Your Ads Privacy Choices
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            Privacy Notice
          </Link>
        </li>
      </ul>
      <Text variant="body_small_1">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </Text>
    </Flex>
  );
}

export default BottomFooter;
