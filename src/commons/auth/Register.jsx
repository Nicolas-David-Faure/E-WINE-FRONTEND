import React, { useState } from 'react'
//framer-motion
import { motion } from 'framer-motion'
//router
import { useNavigate } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './scss/register.scss'
//SVG WAVE
import waveSVG from '../../assets/icons/waves/wave1.svg'
//utils
import cleanStateObj from '../../utils/cleanSatateObj'


const inputMotion = {
  on:{},
  initial: {}
}
const Register = () => {
  const [infoUser, setInfoUser] = useState({name:'',lastname:'',password:'',email:''})
  // const navigate = useNavigate()


  const handleSubmit =( event )=>{
    event.preventDefault()
    console.log(infoUser)
    // axios.post('/api/user/register', userInfo)
    //   .then((res)=>{
    //     setUserInfo(cleanStateObj)
    //     navigate('/auth_panel?type=login')  
    //   })
    //   .catch(err=>{
    //     const status = err.response.status
    //     if(status === 500) 
    //     alert('Este email ya se encuentra registrado en nuestra base de datos, por favor elige otro')
    // })
  }

  const handleChange = (event)=>{
    const inputName = event.target.name
    const inputValue = (inputName !== 'password' &&  
                        inputName !== 'email' ?    //If is different to 'password' and 'email' , apply lower case
                        event.target.value.toLowerCase() :
                        event.target.value);            //else not

    setUserInfo({...userInfo, [inputName]:inputValue})
  }
  
  return (
    <form onSubmit={handleSubmit} className='register__main'> 
      <h2>Registrate</h2>
      <motion.input
        layout
        initial={{opacity:0, y: -90}}
        animate={{opacity:1, y:0 , transition:{duration:1.3,type:'spring'}}}
        type="text" 
        value={infoUser.name}  
        placeholder='Nombre' 
        name="name"
        onChange={handleChange} />
      <motion.input 
        layout
 
        initial={{opacity:0, y: -80}}
        animate={{opacity:1, y:0 , transition:{duration:1.1,type:'spring'}}}
        type="text"  
        value={infoUser.lastname} 
        placeholder='Apellido' 
        name="lastname"
        onChange={handleChange} />
      <motion.input
        layout
        
        initial={{opacity:0, y: -70}}
        animate={{opacity:1, y:0 , transition:{duration:.9,type:'spring'}}} 
        type="password" 
        value={infoUser.password}  
        placeholder='Contraseña' 
        name="password"
        onChange={handleChange} />
      <motion.input
        layout
        
        initial={{opacity:0, y: -60}}
        animate={{opacity:1, y:0 , transition:{duration:.7,type:'spring'}}} 
        type='email'  
        value={infoUser.email} 
        placeholder='Email' 
        name='email' 
        onChange={handleChange}/>

      <motion.button
      layout
      initial={{opacity:0, y: -50}}
      animate={{opacity:[0 , 0.5 , 0.7], y:0 , transition:{duration:.3,type:'spring'}}} 
      type="submit">Registrate</motion.button>
      <img className='register__wave' src={waveSVG} alt='wave' />
    </form>
  )
}

export default Register

