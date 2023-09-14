import React, { useEffect, useMemo, useState } from 'react'
import './scss/history.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
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
                    <p>{ele.name}</p>
                    <p>{ele.grape}</p>
                  </div>
                  
                </li>
                )})}
                      
          </div>
          )
         
         })

        }
      </ul>
    </section>
  )
}



export default History
