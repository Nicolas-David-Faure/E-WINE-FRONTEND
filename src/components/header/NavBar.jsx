import React, { useEffect, useState } from "react";
//redux
import { useDispatch , useSelector } from "react-redux";
//axios
import axios from "axios";
//router
import { Link, useNavigate } from "react-router-dom";
//styles
import "./scss/navBar.scss";
//framer-motion
import { motion } from "framer-motion";
import { changeSearch } from "../../store/slice/searchSlice";
import { toggleNav } from "../../store/slice/navSlice";

const NavBar = () => {
  const { activeNav } = useSelector(store=>store.navBarReducer)
  const [ dataCategory , setDatCategory ] = useState(null)
  const [ category , setCategory ] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const handleActiveNav = (e) => { //active a setTimeOut whith some delay before define setIsHover to true 
    e.stopPropagation()
    if(activeNav === false){
      dispatch(toggleNav(true))
    }else{
    
      dispatch(toggleNav(false))
      setCategory(null)
    }
  
  };

  const handleSubmit = (  category , word ) => {
    dispatch(toggleNav(false))

   
    axios
      .get(`/api/category/${word}/${category}`)
      .then((response) => {
        navigate('/')
        dispatch(changeSearch(response.data));
      })
      .catch(() => alert("No tenemos ese vino en nuestro catalogo"));
  };


  useEffect(()=>{
    axios.get('/api/category/all')
    .then(({data})=>setDatCategory(data))
    .catch((err)=>console.error(err))
  },[])

  return (
    <motion.nav
    onClick={handleActiveNav}
    
    className="navBar__main">
      <Link 
      onClick={()=>dispatch(changeSearch(null))}
      to="/"><motion.p onHoverStart={()=>{

        setCategory('winery')
        }}>Home</motion.p></Link>
      <motion.p 
      onHoverStart={()=>{setCategory('winery')}}
    
      >Bodegas</motion.p>
      <motion.p 
      onHoverStart={()=>{setCategory('grape')}}
      
      >Uvas</motion.p>
      <motion.p 
    
      onHoverStart={()=>{setCategory('wine_type')}}
      >Tipo de vinos</motion.p>
      <motion.div
        initial={{display:'none'}}
        animate={activeNav ? { display:'flex'} : {display:'none'} }
        className='navBar__dropdown'>
          {
          category &&
          dataCategory[category]?.map(((word, i)=>{
            
            return(
              <a onClick={()=>handleSubmit(word , category)} key={i}>{word}</a>
            )
          }))}
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
