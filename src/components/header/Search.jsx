import React from 'react'
//styles
import './scss/search.scss'
//icons
import searIcon from '../../assets/icons/search.svg'
const Search = () => {


  return (
    <form className='search__main'>
      <div className='search__cont_btn'>
        <img src={searIcon} alt="search" />
      </div>

      <input type="text" />
    </form>
  )
}

export default Search
