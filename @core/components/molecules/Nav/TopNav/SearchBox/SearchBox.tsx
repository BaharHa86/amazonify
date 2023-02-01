import React from 'react'
 
import Categories from './Categories/Categories'
import SearchButton from './SearchButton/SearchButton'
import styles from './SearchBox.module.scss'
import TextInput from '../../../../atoms/InputFieldes/TextInput/TextInput'
 

function SearchBox() {
  return (
    
   
     <form className={styles.search}>
        <Categories />
        <TextInput type='search' variant='search'/>
        <SearchButton/>
        </form>
   
  )
}

export default SearchBox