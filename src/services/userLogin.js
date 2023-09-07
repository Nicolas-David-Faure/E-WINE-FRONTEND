import axios from "axios";
export default async function  (userData) {
  const response = await axios.post('/api/user/login', userData, {withCredentials: true  })
  .then(({data : user})=>{
    return user
  })
  .catch(({response : {status}})=>{
    if(status === 401) alert('Contraseña Incorrecta o email incorrectos')
  })
  return response
}