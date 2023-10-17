import React, { useEffect, useState } from "react";

//commons
import Card from "../../../commons/card/Card";
import Banner from "../../../commons/banner/Banner";
//styles
import "./scss/grid.scss";
//axios
import axios from "axios";
import { useSelector } from "react-redux";

const Grid = () => {
  const [wines, setWines] = useState([]);
  const wineFounded = useSelector((store) => store.searchReducer.searched);
  const [ page , setPage ] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    axios
      .get("/api/wines/page/"+page)
      .then((result) => result.data)
      .then((data) => {
        const numOfPages = data.pop()
        setTotalPages(numOfPages.total)
        setWines(data)
      })
      .catch((err) => console.error("error", err));
  }, [page]);

  const pages = [1,2,3,4,5,6,7,8,9,10]
  
  return (
    <div className="grid__main">

      {!wineFounded && <Banner />}
     
      {wineFounded
        ? wineFounded.map((producto) => {

          return <Card key={producto.id} producto={producto} />
        })
        : 
        <>
         <ul className="grid__cont_page">
            {
            pages?.map((num, i)=>{
              if(wines){
                  if(num > totalPages){
                  return
                  }
              }
              return(
                <button  
                  onClick={()=>setPage(num)} 
                  className="grid__page" 
                  key={i+1} value={num}>
                    {num}
                  </button>
              )
            })}
          </ul>
        
          {wines
              .slice(0, 20)
              .map((producto) => <Card key={producto.id} producto={producto} />)}
          </>
        }
    </div>
  );
};

export default Grid;
