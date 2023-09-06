import React, { useState } from 'react'
//framer-motion
import { motion } from 'framer-motion'
//style
import './scss/login.scss'
//svg wave
import waveSVG from '../../assets/icons/waves/wave1.svg'
import axios from 'axios'
//utils
import cleanStateObj from '../../utils/cleanSatateObj'
const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const handleSubmit =(event)=>{
    event.preventDefault()

    setUserInfo(cleanStateObj)

    console.log(userInfo)
    // axios.post('/api/user/login', userInfo)
    // .then((res)=>{
    //   navigate('/browse/movie')
    // })
    // .catch(({response})=>{
    //   const status = response.status

    //   if(status === 401) alert('Contraseña Incorrecta')
    // })
  }

  const handleChange = (event)=>{
    const inputValue = event.target.type !== 'number' ? event.target.value.toLowerCase() : event.target.value
    const inputName = event.target.name

    setUserInfo({...userInfo, [inputName]:inputValue})
  }
  
  return (
    <form onSubmit={handleSubmit} className='login__main'>
      <h2>Iniciar Sesión</h2>

      <motion.input
      layout
      initial={{opacity:0, y: -90}}
      animate={{opacity:[0 , 0.5 , 0.7,1], y:0 , transition:{duration:.8,type:'spring'}}} 
      type='email' 
      placeholder='Email' 
      name='email'
      value={userInfo.email} 
      onChange={handleChange}
      required/>
      <motion.input
      layout
      initial={{opacity:0, y: -70}}
      animate={{opacity:[0 , 0.5 , 0.7,1], y:0 , 
      transition:{duration:.5,type:'spring'}}} 
      type="password"  
      placeholder='Contraseña'
      name="password"
      value={userInfo.password}
      onChange={handleChange}
      required/>

      <motion.button
      layout
      initial={{opacity:0, y: -50}}
      animate={{
        opacity:[0 , 0.5 , 0.7,1], y:0 , 
        transition:{duration:.3,type:'spring'
      }}} 
      type="submit">Ingresar</motion.button>
      <img 
      className='register__wave' 
      src={waveSVG} 
      alt='wave' />
    </form>
  )
}

// email
// password



export default Login