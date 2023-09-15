import React, { useEffect, useState } from 'react'
//styles
import './scss/choosePaymentMethod.scss'
//redux
import { useSelector , useDispatch } from 'react-redux'
import { addSelectedPaymentMethod } from '../../store/slice/continueShoppingSlice/continueShoppingSlice'
//axios
import axios from 'axios'
//utils
import cleanStateObj from '../../utils/cleanSatateObj'
import maskNumber from '../../utils/maskNumber'


const ChoosePaymentMethod = ( {setContinue}) => {
  const user = useSelector(store=>store.userReducer.user)
  const [ paymentMethods , setPaymentMethods ] = useState(null)
  const [ activeFormPaymentMethod , setActiveFormPaymentMethod ] = useState(false)
  const [update , setUpdate ] = useState(false)
  const [checkRadio , setCeckRadio] = useState(null)
  const dispatch = useDispatch()

  const handleSelect =(idInput,idPayment)=>{
    setCeckRadio(idInput)
    let paymentSelected = paymentMethods.filter(ele=>ele.id == idPayment) 
    
    dispatch(addSelectedPaymentMethod(paymentSelected[0]))
  }
  const handleComeback =()=>{
    setContinue(false)
  }

  const handleDelete =( id )=>{
    axios.delete('/api/checkout/payment/'+id)
    .then(()=>{
      setUpdate(!update)
    })
    .catch(err=>console.error(err))
  }

  useEffect(()=>{
     axios.get('/api/checkout/payment/'+user?.email)
    .then(({data})=>{
      setPaymentMethods(data)
    })
    .catch(err=>console.error(err))
  },[activeFormPaymentMethod, update])
  
  return (
    <section className='choosePaymentMethod__main'>
      <h2>Elegí la forma de pago</h2>
      {!activeFormPaymentMethod && <a className='choosePaymentMethod__back'onClick={handleComeback}>Atras</a>}
    {activeFormPaymentMethod ?
     <FormPayment user={user} setActiveFormPaymentMethod={setActiveFormPaymentMethod} />
      :
      <ul className='choosePaymentMethod__cont_list'>

        {paymentMethods?.map((method)=>{
          return(
                  <li 
                    className={checkRadio === `method-${method.id}` ? 'method__selected choosePaymentMethod__list' : 'choosePaymentMethod__list'}
                    onClick={()=>handleSelect(`method-${method.id}`, method.id)} 
                    key={method.id}>
                     <a className='choosePaymentMethod__list_delete' onClick={()=>handleDelete(method.id)}>Eliminar</a>
                    <input 
                      type="radio" 
                      name="radio" 
                      value={`method-${method.id}`}
                      checked={ checkRadio ===`method-${method.id}`}
                      onChange={()=>{}}
                      />

                    <div className='choosePaymentMethod__list_div'>
                      <p>{method.fullname}</p>
                      <p>{method.dni}</p>
                    </div>

                    <div className='choosePaymentMethod__list_div'>
                      <p>{maskNumber(method.card_number)}</p>
                      <p>{method.expire}</p>
                    </div>
                  </li>
                )
        })}
      </ul>
  } 
    <a onClick={()=>setActiveFormPaymentMethod(true)}>Añadir metodo de pago</a>
      <button 
        onClick={()=>{
          
          setContinue(true)
        }}
        className='choosePaymentMethod__continue_btn' 
        type="button">Continuar compra</button>
    </section>
  )
}

const body = {
  fullname:'',
  card_number:null,
  expire:'',
  cvv: null,
  dni: null
}

const FormPayment = ( { user  , setActiveFormPaymentMethod } ) =>{
  const [ paymentMethodInfo , setPaymentMethodInfo ] = useState(body)


  const handleChange = (event) => {
    const inputName = event.target.name;
   
    const inputValue = event.target.value; 

    setPaymentMethodInfo({ ...paymentMethodInfo, [inputName]: inputValue });
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('/api/checkout/payment/'+user?.email,paymentMethodInfo)
    .then(res=>{
      setActiveFormPaymentMethod(false)
      setPaymentMethodInfo(cleanStateObj)
    })
    .catch(err=>console.error(err))
  }

return (
  <form className='choosePaymentMethod__form' onSubmit={handleSubmit}>
  <a onClick={()=>{setActiveFormPaymentMethod(false)}}>Volver</a>
    <div>
      <label htmlFor="choosePaymentMethod__fullname">Nombre completo:</label>
      <input onChange={handleChange} 
        name='fullname' 
        id='choosePaymentMethod__fullname' 
        type="text"
        minLength={6}
        value={paymentMethodInfo.fullname}
        required
        />
    </div>

    <div>
      <label htmlFor="choosePaymentMethod__card_number">Numero de tarjeta:</label>
      <input onChange={handleChange} 
        name='card_number'
        id='choosePaymentMethod__card_number'  
        type="number"
        minLength={16}
        maxLength={16}
        value={paymentMethodInfo.card_number}
        required
        />
    </div>

    <div>
      <label htmlFor="choosePaymentMethod__expire">Fecha de expiración:</label>
      <input onChange={handleChange} 
        name='expire' 
        id='choosePaymentMethod__expire' 
        type="text" 
        maxLength={5}

        value={paymentMethodInfo.expire}
        required
        />
    </div>

    <div>
      <label htmlFor="choosePaymentMethod__cvv">CVV:</label>
      <input onChange={handleChange} 
        name='cvv' 
        id='choosePaymentMethod__cvv' 
        type="number"
        maxLength={3} 
        value={paymentMethodInfo.cvv}
        required
        />
    </div>
    
    <div>
      <label htmlFor="choosePaymentMethod__dni">DNI:</label>
      <input onChange={handleChange} 
        name='dni' 
        id='choosePaymentMethod__dni' 
        type="number"
        maxLength={8}
        minLength={7} 
        value={paymentMethodInfo.dni}
        required
        />
    </div>
<button type="submit">Añadir</button>
</form>
)
}

export default ChoosePaymentMethod
