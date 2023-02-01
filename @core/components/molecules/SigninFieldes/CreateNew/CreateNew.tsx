import React from 'react'
import Button from '../../../atoms/Button/Button'
import Flex from '../../../atoms/Flex/Flex'
import Text from '../../../atoms/Text/Text'
import Styles from './CreateNew.module.scss';

function CreateNew() {
  return (
    <Flex variant='col_cntr_strt' className={Styles.create_new}> 
        <Text variant='body_medium_2' className={Styles.text}>New to Amazon?</Text>
        <Button variant='create_new' href='/register'>Create your Amazon account</Button>
    </Flex>
  )
}

export default CreateNew