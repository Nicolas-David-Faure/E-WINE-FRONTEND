import React, { useEffect, useState } from "react";
//redux
import { useDispatch } from "react-redux";
//axios
import axios from "axios";
//router
import { Link } from "react-router-dom";
//styles
import "./scss/navBar.scss";
//framer-motion
import { motion } from "framer-motion";
import { changeSearch } from "../../store/slice/searchSlice";

const NavBar = () => {
  const [ activeNav , setActiveNav ] = useState(false)
  const [ dataCategory , setDatCategory ] = useState(null)
  const [ category , setCategory ] = useState(null)

  const dispatch = useDispatch()

  let timeOut;

  const handleDisableNav =()=>{
    clearTimeout(timeOut);
    setActiveNav(false);
    setCategory(null)
   
  }
  const handleActiveNav = () => { //active a setTimeOut whith some delay before define setIsHover to true 
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      setActiveNav(true);
    }, 50);
  };

  const handleSubmit = ( word ) => {

    axios
      .get(`/api/search?query=${word}`)
      .then((response) => {
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
    onHoverEnd={handleDisableNav}
    className="navBar__main">
      <Link 
      onClick={()=>dispatch(changeSearch(null))}
      to="/"><motion.a onHoverStart={()=>{

        setCategory('winery')
        }}>Home</motion.a></Link>
      <motion.a 
      onHoverStart={()=>{setCategory('winery')}}
    
      >Bodegas</motion.a>
      <motion.a 
      onHoverStart={()=>{setCategory('grape')}}
      
      >Uvas</motion.a>
      <motion.a 
    
      onHoverStart={()=>{setCategory('wine_type')}}
      >Tipo de vinos</motion.a>
      <motion.div
        initial={{display:'none'}}
        animate={activeNav ? { display:'flex'} : {display:'none'} }
        className='navBar__dropdown'>
          {
          category &&
          dataCategory[category].map(((word, i)=>{
            return(
              <a onClick={()=>handleSubmit(word)} key={i}>{word}</a>
            )
          }))}
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
