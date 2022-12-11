import React, {useEffect} from 'react'
import "../../src/index.css"
import SearchInput from "./SearchInput";
import CocktailData from "./CocktailData";

const Home = () => {
  return (
    <>
    <div  className="container-main" style={{ marginTop: "60px"}}>
    <SearchInput />
    <CocktailData />            
    </div>
    </>
  )
}

export default Home
