import { useEffect } from 'react';
//router
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { handleUser } from './store/slice/userSlice';
//axios
import axios from 'axios';
//styles
import './App.scss'
//components
import Header from './components/header/Header'
import MainContent from './components/main/MainContent' 


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  useEffect(()=>{
    axios('/api/user/me')
    .then( ( { data : { user } } )=>{
      if(user){
      navigate('/')
      dispatch(handleUser(user))
    }
    })
    .catch(err=>{
      console.error(err)
    })
  },[])

  return (
    <main className='main__main'>
      <Header />
      <MainContent />
     
    </main>
  );
}

export default App;
