import { useEffect, useState } from 'react';
import './App.scss'
import Header from './components/header/Header'
import MainContent from './components/main/MainContent' 
import axios from 'axios';


//redux
import { useDispatch } from 'react-redux';
import { handleUser } from './store/slice/userSlice';
import { useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  useEffect(()=>{
    axios('/api/user/me')
    .then(({data: user})=>{
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
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;
