import React from 'react'
import './scss/mainContent.scss'
//commons
import Auth from '../../commons/auth/Auth'
import Header from '../header/Header'
//components
const MainContent = () => {
  return (
    <main className='mainContent__main'>
      <Header />
      <Auth />

    </main>
  )
}

export default MainContent
