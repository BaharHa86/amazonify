import React from 'react'
import LinkBox from '../../../../atoms/LinkBox/LinkBox'
import styles from './NavList.module.scss'

function NavList() {
  return (
        <div className={styles.nav_list}>
        
            <LinkBox href='' variant='nav_link'>
            Today&apos;s Deals
            </LinkBox>
       
       
            <LinkBox href='' variant='nav_link'>
            Customer Service
            </LinkBox>
     
      
            <LinkBox href='' variant='nav_link'>
            Registry
            </LinkBox>
      
            <LinkBox href='' variant='nav_link'>
            Gift Cards
            </LinkBox>
     
            <LinkBox href='' variant='nav_link'>
                Sell
            </LinkBox>
      
        
            </div>
  )
}

export default NavList
 





