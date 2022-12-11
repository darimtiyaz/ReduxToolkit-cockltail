import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, resolvePath, useNavigate, useParams } from "react-router-dom";
import { getCocktails } from "../redux/cocktailSlice";
import "./cocktail.css"

const Coktail = () => {
  const [modifiedData, setModifiedData] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cocktails, loading} = useSelector((state)=> ({...state.app}))

  useEffect(()=>{
    dispatch(getCocktails())
  },[])
  useEffect(()=>{
    if(cocktails){
      const newData = cocktails.map((item)=> {
        const {idDrink, strDrink, strDrinkThumb, strAlcholic, strGlass } = item;
        return {
          id: idDrink,
          name:strDrink,
          image: strDrinkThumb,
          info: strAlcholic,
          glass: strGlass
        };
      });
      setModifiedData(newData)
    }else {
      setModifiedData([]);
    }
  }, [cocktails])
 console.log('cocktails', cocktails)
 if(loading){
  return(
    <div className="spinner-grow" role="status">
      <spin className="visibility-hidden">Loading...</spin>
    </div>
  )
 }
  return (
    <div
      className="container"
    >
   
    {modifiedData && Array.from(modifiedData).map((item)=> {
      const {id, name, image, glass} = item;
      return (
      <div className="container-grid" key={id}
      style={{marginLeft: '100px', display: 'grid', gridTemplateRows: "50px, 50Px, 50px", marginBottom: '15px'}}>
        <img src={image} alt="img" style={{hight: "120px", width: "160px"}}/>        
        <div className="card-body" style={{textAlign: 'left'}}>
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">{glass}</h5>
        </div>
        <NavLink to = { `/view/${id}`}>view</NavLink>
      </div>
    )})}
    
    </div>
  );
};

export default Coktail;
