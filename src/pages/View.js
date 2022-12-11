import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCocktail } from "../redux/cocktailSlice";
const View = () => {
  const { cocktails, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCocktail({ id }));
  }, [id]);
  console.log("colitail view data", cocktails, id);
 
  //  console.log("view data", post, id)
 
  
  return (
    <>
      {loading ? (
        <div className="container">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
         <div className="container" style={{display: 'grid', justifyContent: 'center', placeItems: 'center', gridGap:'3px'}}>
          <h1>welcome to view page</h1>
          <img src={cocktails?.[0]?.strDrinkThumb} alt="" width="300px" height="200px" style={{borderRadius: '15px'}}/>
          <h5>id: {cocktails?.[0]?.idDrink}</h5>
          <h5>date: {cocktails?.[0]?.dateModified}</h5>
          <h5>name: {cocktails?.[0]?.strAlcoholic}</h5>
          <h5>Info: {cocktails?.[0]?.strDrink}</h5>
          <h5>Glass: {cocktails?.[0]?.strGlass}</h5>
          <h5>Category: {cocktails?.[0]?.strCategory}</h5>
          <h5>Ing1: {cocktails?.[0]?.strIngredient1}</h5>
          <h5>Ing2: {cocktails?.[0]?.strIngredient2}</h5>
          <h5>Ing3: {cocktails?.[0]?.strIngredient3}</h5>
          <h5>Instructions: {cocktails?.[0]?.strInstructions}</h5>
          <h5>InstuctionsDE: {cocktails?.[0]?.strInstructionsDE}</h5>
          <h5>InstructionsES: {cocktails?.[0]?.strInstructionsES}</h5>
          
          <span><h5>InstructionsIT: </h5><p>{cocktails?.[0]?.strInstructionsIT}</p></span>
          
          <Link to="/">Home</Link>
        </div>
      )}
    </>
  )};

export default View;
