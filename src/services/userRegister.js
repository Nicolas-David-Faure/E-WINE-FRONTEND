import axios from "axios"

export default async function (userData){
  const response = await axios.post('api/user/add', userData)
  .then((res)=>{
    return res
  })
  .catch(err=>{
    const status = err.response.status
    if(status === 400) 
    alert('Este email ya se encuentra registrado en nuestra base de datos, por favor elige otro')
    return status
  })

  return response
}