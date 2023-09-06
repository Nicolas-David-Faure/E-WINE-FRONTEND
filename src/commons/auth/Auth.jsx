import React from 'react'
//router
import { useNavigate } from 'react-router-dom'
//styles
import './scss/auth.scss'
//components
import Login from './Login'
import Register from './Register'
const Auth = () => {

  return (
    <section className='auth__main'>

     <Login />
    </section>
  )
}

export default Auth
