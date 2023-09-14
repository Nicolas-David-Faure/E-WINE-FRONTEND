import React, { useEffect, useState } from "react";
//axios
import axios from "axios";
//router
import { Link } from "react-router-dom";
//styles
import "./scss/navBar.scss";
//framer-motion
import { motion } from "framer-motion";

const NavBar = () => {
  const [ activeNav , setActiveNav ] = useState(false)
  const [ dataCategory , setDatCategory ] = useState(null)
  const [ category , setCategory ] = useState(null)



  let timeOut;
  const handleActiveNav = () => { //active a setTimeOut whith some delay before define setIsHover to true 
    timeOut = setTimeout(() => {
      setActiveNav(true);
    }, 300);
  };


  const handleDisableNav =()=>{
    clearTimeout(timeOut);
    setActiveNav(false);
    setCategory(null)
  }

  useEffect(()=>{
    axios.get('/api/category/all')
    .then(({data})=>setDatCategory(data))
    .catch((err)=>console.error(err))
  },[])
  return (
    <motion.nav
    onHoverStart={handleActiveNav}
    onHoverEnd={handleDisableNav}
    className="navBar__main">
      <Link to="/">Home</Link>
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
        animate={activeNav ? { display:'flex'} : {display:'none'} }
        className='navBar__dropdown'>
          {
          category &&
          dataCategory[category].map(((word, i)=>{
            return(
              <p key={i}>{word}</p>
            )
          }))}
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
