import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`);
  if(response.ok){
    return response.json();
  }
});

export const getCocktail = createAsyncThunk("cocktails/fetchCocktail", async({id}) =>{
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  if(response.ok){
    return response.json();
  }
 });

export const searchCocktail = createAsyncThunk("cocktails/fetchSearchCocktail", async({searchText}) =>{
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
  if(response.ok){
    return response.json();
  }
});




const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>{
    builder
    .addCase(getCocktails.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getCocktails.fulfilled, (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    })
    .addCase(getCocktails.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(getCocktail.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getCocktail.fulfilled, (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    })
    .addCase(getCocktail.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(searchCocktail.pending, (state, action) => {
      state.loading= true;
    })
    .addCase(searchCocktail.fulfilled, (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    })
    .addCase(searchCocktail.rejected, (state, action) => {
      state.loading=false;
    })
  },
});

export default cocktailSlice.reducer;
