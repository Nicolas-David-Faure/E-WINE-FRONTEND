import React from 'react'
//styles
import './scss/header.scss'
//logo
import logoE_Wine from '../../assets/images/Logo_e-wine.png'
const Header = () => {
  return (
    <header className='header__main'>
      <div >
        <img src={logoE_Wine} className='header__logo' alt="logo_e-wine" />
      </div>


    </header>
  )
}

export default Header
