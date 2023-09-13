import React, { useEffect, useState } from 'react'
//router
import { useNavigate } from 'react-router-dom'
//redux
import { useSelector , useDispatch } from 'react-redux'
import { addSelectedAddress } from '../../store/slice/continueShoppingSlice/continueShoppingSlice'
//styles
import './scss/chooseAddress.scss'
//axios
import axios from 'axios'


const ChooseAddress = ( { setContinue } ) => {
  const user = useSelector(store=>store.userReducer.user)
  const [ addressInfo , setAddressInfo ] = useState(null)
  const [ editOrAddNewAddress , setEditOrAddNewAddress ] = useState(false)
  const [checkRadio , setCeckRadio] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSelect =( idInput , idAddress)=>{
    setCeckRadio(idInput)
    let addressFiltered = addressInfo.filter(ele=> ele.id === idAddress) 
    dispatch(addSelectedAddress(addressFiltered[0]))
  }

  useEffect(()=>{
    if(user?.email){
      axios.get('/api/checkout/address/'+user?.email)
      .then(({data})=>{
        setAddressInfo(data)
      })
      .catch(err=>console.error(err))
    }
  },[])
  
  return (
    <section className='chooseAddress__main'>
      <h2>Elegí la forma de entrega</h2>
      {!editOrAddNewAddress && <a className='chooseAddress__back'onClick={()=>navigate('/user/cart')}>Atras</a>}
      {editOrAddNewAddress ? 
      
      <FormAddress user={user} setEditOrAddNewAddress={setEditOrAddNewAddress}/>

      :
      <ul className='chooseAddress__cont_list'>

        {addressInfo?.length > 0 && addressInfo?.map(address=>{
          
          return (
          <li  
            className={checkRadio === `chooseAddres-${address.id}` ? 'chooseAddres__selected chooseAddress__list' : 'chooseAddress__list'}
            onClick={()=>handleSelect(`chooseAddres-${address.id}` , address.id)} 
            key={address.id}>
            <input 
             type="radio" 
             name="radio" 
             value={`chooseAddres-${address.id}`}
             checked={ checkRadio ===`chooseAddres-${address.id}`}
             onChange={()=>{}}
             />
            <div className='chooseAddress__list_div'>
              <p>Código postal: {address.postal_code}</p>
              <p>Provincia: {address.province}</p>
            </div>
            
            <div className='chooseAddress__list_div'>
              <p>Ciudad: {address.city}</p>
              <p>Calle: {address.address} {address.addressNum}</p>
            </div>
            
          </li>
        )
        })}
        
      </ul>
      
    }
    <a onClick={()=>setEditOrAddNewAddress(true)}>Añadir domicilio</a>
      <button 
        onClick={()=>{

          if(!checkRadio){
            alert('debes elegir una opción')
          }else{

            setContinue(true)
          }
        }}
        className='chooseAddress__continue_btn' 
        type="button">Continuar compra</button>
    </section>
  )
}

const body = {
  address: '',
  addressNum: null,
  apartment: '',
  postal_code: null,
  city: '',
  province:'',
  more_data: '',
}

const FormAddress = ( { user , setEditOrAddNewAddress} )=> {
  const [ addressInfo , setAddressInfo ] = useState(body)

    const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value; 
    setAddressInfo({ ...addressInfo, [inputName]: inputValue });
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(addressInfo)
    axios.post('/api/checkout/address/'+user?.email,addressInfo)
    .then(res=>console.log(res))

  }
  
  return (
    <form className='chooseAddress__form' onSubmit={handleSubmit}>
        <a onClick={()=>setEditOrAddNewAddress(false)}>Volver</a>

        <div className='chooseAddress__form_postal-code'>
          <label htmlFor="postal_code">Código postal</label>
          <input 
            onChange={handleChange} 
            placeholder='Código postal' 
            id='postal_code' 
            type="number" 
            name="postal_code" 
            required/>
        </div>

        <div className='chooseAddress__form_street'>
          
          <div>
            <label htmlFor="address">Calle</label>
            <input 
              onChange={handleChange} 
              placeholder='Calle' 
              id='address' type="text" 
              name="address" 
              required/>
          </div>

          <div>
            <label htmlFor="addressNum">Numero de calle</label>
            <input 
              onChange={handleChange} 
              placeholder='Numero de calle' 
              id='addressNum' 
              type="number" name="addressNum" 
              required/>

          </div>
        </div>

        <div className='chooseAddress__form_apartment'>
          <label htmlFor="apartment">Piso (opcional)</label>
          <input 
            onChange={handleChange} 
            placeholder='Piso (opcional)' 
            id='apartment' 
            type="text" 
            name="apartment" 
            required/>
        </div>

        <div className='chooseAddress__form_locality'>
          <div>
            <label htmlFor="city">Ciudad</label>
            <input 
              onChange={handleChange} 
              placeholder='Ciudad' 
              id='city' 
              type="text" 
              name="city" 
              required/>
          </div>

            
          <div>
            <label htmlFor="province">Provincia</label>
            <input 
              onChange={handleChange} 
              placeholder='Provincia' 
              id='province' 
              type="text" 
              name="province" />
          </div>
        </div>
        <label htmlFor="more_data">Más informacion</label>
        <textarea name="more_data" id='more_data' cols="30" rows="10"></textarea>

        <button type="submit">Añadir</button>
      </form>
  )
}

export default ChooseAddress
