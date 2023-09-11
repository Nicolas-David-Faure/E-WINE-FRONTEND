import React, { useState , useEffect , useRef} from 'react';
//router
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { handleUser } from '../../store/slice/userSlice';
//framer-motion
import { motion } from 'framer-motion';
//style
import './scss/login.scss';
//svg wave
import waveSVG from '../../assets/icons/waves/wave1.svg';
//utils
import cleanStateObj from '../../utils/cleanSatateObj';
//services
import userLogin from '../../services/userLogin';
const Login = () => {
  const refSubmit = useRef()
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event)=>{
    event.preventDefault()
    await userLogin(userInfo)
    .then(user=>{
      if(user){
      dispatch(handleUser(user))
      setUserInfo(cleanStateObj)
      navigate('/')
    }
    })
  }

  const handleChange = (event)=>{
    const inputValue = event.target.type !== 'number' ? event.target.value.toLowerCase() : event.target.value
    const inputName = event.target.name
    setUserInfo({...userInfo, [inputName]:inputValue})
  }
  


  useEffect(() => {
    refSubmit.current.disabled = true;
    const userValues = Object.values(userInfo);
    const verify = userValues.every((value) => value !== "");
    refSubmit.current.disabled = !verify;
}, [userInfo]);
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
      ref={refSubmit}
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

export default Login