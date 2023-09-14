import React from 'react'
//redux
import { useSelector } from 'react-redux'
//styles
import './scss/confirmDetails.scss'
//icons
import locationIcon from '../../assets/icons/location-plus.svg'
import truckIcon from '../../assets/icons/truck.svg'
import noteIcon from '../../assets/icons/noteIcon.svg'
import dollarIcon from '../../assets/icons/dollarIcon.svg'
const ConfirmDetails = ( { setContinue } ) => {
  const { addressSelectedInfo , paymentMethodSelectedInfo } = useSelector(store=>store.continueShoppingReducer)


  
  return (
    <section className='confirmDetails__main'>
      <h2>Revisá y confirmá tu compra</h2>
        <AddressInfo setContinue={setContinue} info={addressSelectedInfo} />
        <PaymentMethodInfo setContinue={setContinue} info={paymentMethodSelectedInfo}/>
    </section>
  )
}

const AddressInfo =({ info , setContinue})=>{

  return(
    <div className='addressinfo__main'>
      <h4>Detalles de la entrega</h4>

      <div className="addressinfo__div divisors">
        <div className='divisors__cont_icon'>
          <img src={locationIcon} alt="localy" />
        </div>
        <div>
          <h5>{info.apartment ? info.apartment : 'Departamento'}</h5>
          <p>C.P. {info.postal_code} - {info.city}, {info.province}</p>
          <p>{info.address} {info.addressNum}</p>
          <a onClick={()=>setContinue(0)} className='divisor__link'>Cambiar dirección</a>
        </div>
      </div>
      <div className="addressinfo__div divisors">
        <div className='divisors__cont_icon'>
          <img src={truckIcon} alt="truck" />
        </div>
        <h3>Llega el martes a tu domicilio</h3>
      </div>
    </div>
  )
}

const PaymentMethodInfo =({ info , setContinue})=>{
 

  return (
    <div className='paymentMethodInfo__main'>
      <h4>Detalles del pago</h4>

      <div className="paymentMethodInfo__div divisors">
        <div className='divisors__cont_icon'>
          <img src={dollarIcon} alt="dollar sign" />
        </div>
       
        <div>
          <h2>Disponible en Pagos E-Wine</h2>
        </div>
      <div>

        </div>
      </div>
      <div className="paymentMethodInfo__div divisors">
        <div className='divisors__cont_icon'>
          <img src={noteIcon} alt="note" /> 
        </div>
        <div>
            <h5>Datos de Facturación</h5>
            <p>Factura A: {info.fullname} - DNI: {info.dni}</p>
            <a onClick={()=>setContinue(1)} className='divisor__link'>Cambiar método de pago</a>
        </div>
      </div>

    </div>
  )
}

export default ConfirmDetails
