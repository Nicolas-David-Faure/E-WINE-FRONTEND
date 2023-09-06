import React from 'react'
//router

//styles
import './scss/userButtons.scss'
const UserButtons = () => {


 
  return (
    <div className='userButtons__main'>
      <button onClick={handleRegister} >Registrate</button>
      <button onClick={handleLogin} >Ingresá</button>
    </div>
  )
}

export default UserButtons
