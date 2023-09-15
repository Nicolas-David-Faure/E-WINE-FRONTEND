import React, { useEffect, useMemo, useState } from 'react'
//styles
import './scss/history.scss'
//axios
import axios from 'axios'
//redux
import { useSelector } from 'react-redux'
//utils
import numberFormater from '../../../utils/numberFormater'
import truncateString from '../../../utils/truncateString'
const History = () => {
  const user = useSelector(store=> store.userReducer.user)
  const [ historyInfo , setHistoryInfo ] = useState()

  let sortByNumCart = {}
  historyInfo?.forEach(element => {
    let numCart = element.num_cart
    if(!sortByNumCart[numCart]){
      sortByNumCart[numCart] = []
    }
    sortByNumCart[numCart].push(element)
  });
  
  let keysOfCart =  Object.keys(sortByNumCart)

  useEffect(()=>{
    axios.get('/api/history/'+user?.email)
    .then(res=> {
      setHistoryInfo(res.data)
    })
    .catch((err=> console.error(err)))
  },[]) 
  
  return (
    <section className='history__main'>
      <h2>Historial</h2>
      <ul className='history__cont_list'>
        {
         keysOfCart.map((key, i)=>{
          let date = sortByNumCart[key][0]['createdAt']
          let hora = date.split(' ')[5]
          let fecha = date.split(' ').slice(0,5).join(' ').slice(0, -1)
          let totalAmount = sortByNumCart[key].reduce((acumulator , item)=>{
            return acumulator + parseInt(item.amount)
          },0)

            return (
          <div className='history__divisor' key={i} >
            <div className='history__divisor_date'>
              <p>{fecha}</p>
              <p>{hora}</p>
            </div>
            {sortByNumCart[key].map(ele=>{
            
                return (
                <li className='history__divisor_list' key={ele.id}>
                  <img src={ele.image} alt={ele.name} />
                  
                    <div className='history__divisor_list_text'>
                      <p>{truncateString(ele.name, 30, true)}</p>
                      <p>{ele.grape}</p>
                    </div>
                    <div className='history__divisor_list_text'>
                      <p>{ele.count} U</p>
                      <p>${numberFormater(ele.amount)},00</p>
                    </div>
               
                </li>
                )})}
             <div className='history__divisor_date'>
              <p>Total</p>
              <p>${numberFormater(totalAmount)},00</p>
            </div>
          </div>
          )
         
         })

        }
      </ul>
    </section>
  )
}



export default History
