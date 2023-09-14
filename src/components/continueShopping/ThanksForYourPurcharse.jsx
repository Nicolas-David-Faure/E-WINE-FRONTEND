import React, { useEffect } from 'react'
//styles
import './scss/thanksForYourPurcharse.scss'
//router
import { useNavigate } from 'react-router-dom'
//redux
import { useSelector } from 'react-redux'
//utils
import firstLetterCapitalized from '../../utils/firstLetterCapitalized'

const ThanksForYourPurcharse = () => {
  const user = useSelector(store=> store.userReducer.user)
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/')
    },1500)
  },[])
  return (
    <div className='thanksForYourPurcharse__main'>

      <h2>Gracias por tu compra {firstLetterCapitalized(user.name)}!</h2>
      <h3>Disfrutá..🍷</h3>
    </div>
  )
}

export default ThanksForYourPurcharse
