 
import React from 'react'
import LinkBox from '../../../atoms/LinkBox/LinkBox'
import Text from '../../../atoms/Text/Text'

function condition() {
  return (
     <Text variant='body_small_1'>By continuing, you agree to Amazon&apos;s<LinkBox variant='signin_condition' href=''>Conditions of Use</LinkBox>
      and <LinkBox variant='signin_condition' href=''>Privacy Notice</LinkBox>Privacy Notice.</Text>
  )
}

export default condition