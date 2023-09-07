import axios from "axios"
export default async function (){
  return await axios.post('/api/user/logout')
                .then(({status})=> status)
                .catch(err=>console.err(err))
}