import React from 'react'
//router
import { useLocation } from 'react-router-dom'
//styles
import './scss/auth.scss'
//components
import Login from './Login'
import Register from './Register'
const Auth = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); //search for params
  const type = searchParams.get('type'); //get the param 'type'
  let componentToRender = null;

  if ( type === 'register' ) {          //compare to render one component
    componentToRender = <Register />;
  } else if ( type === 'login' ) {
    componentToRender = <Login />;
  }
  return (
    <section className='auth__main'>

    {componentToRender}
    </section>
  )
}

export default Auth
