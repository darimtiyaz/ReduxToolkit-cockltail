import React, {useRef} from 'react'
import { searchCocktail } from '../redux/cocktailSlice';
import { useDispatch } from 'react-redux';
const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch()
  
  const handleChange = () => {
    const searchText = searchValue.current.value;
     dispatch(searchCocktail({searchText}))
  }
  return (
    <div style={{display: "grid", justifyContent: "center"}}>
    <form action="" className="search-form">
      <h3 style={{marginLeft: "40px"}}><label htmlFor="name"> search cocktail</label></h3>
      <input type="text" style={{width: "250px", padding: "10px", borderRadius: "20px", marginBottom: "20px"}} placeholder="search" 
        ref={searchValue}
        onChange={handleChange}
      />
      </form>
    </div>
  )
}

export default SearchInput
