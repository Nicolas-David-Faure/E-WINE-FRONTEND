import React, { useEffect, useState } from 'react'
//redux
import { useSelector } from 'react-redux';
//axios
import axios from 'axios';
//styles
import './scss/purchaseSummary.scss'
//utils
import numberFormater from '../../utils/numberFormater'

const PurchaseSummary = ({ phaseContinueShopping , setContinue }) => {
  const user = useSelector(store => store.userReducer.user);
  const [ dataCart , setDataCart ] = useState(null);

  let totalAmount = dataCart?.reduce((acumulator , item)=>{
    return acumulator + parseInt(item.amount)
  },0)

  //email , nombre , direccion , totalAmount

  const handleSendPurcharse =()=>{
    axios.put('/api/cart', {email: user.email})
    .then(res=>{
      setContinue(true)
      
    })
    .catch((err)=>console.error(err))
  }
  useEffect(()=>{
    axios
        .get(`/api/cart/${user?.email}`)
        .then(({ data }) => setDataCart(data))
        .catch((err) => console.error(err));
  },[])
  return (

    <aside className='purchaseSummary__main'>

        <h2>Resumen de compra</h2>
      <ul >
        {dataCart?.map(product=>{

           return (
              <li className='purchaseSummary__list' key={product.id}>
                <img className='purchaseSummary__list_img' src={product.image} alt={product.name} />
                <figcaption className='purchaseSummary__list_figcaption'>
                  <p>{product.name}</p>

                  <div>
                    <p>Cantidad:{product.count}</p>
                    <p>${numberFormater(parseInt(product.amount))},00</p>
                  </div>
                </figcaption>
              </li>
           )
        })}
      </ul>

        <div className='purchaseSummary__total_amount' >
        {phaseContinueShopping == 2 ? <button onClick={handleSendPurcharse} className='purchaseSummary__btn_buy'>Comprar</button> : <h3>Total a pagar</h3>}
            {dataCart && <p>${numberFormater(totalAmount)},00</p>}
        </div>
    </aside>
  )
}




export default PurchaseSummary
