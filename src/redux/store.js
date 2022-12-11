import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from "./cocktailSlice";

export const store = configureStore({
  reducer: {
  app: CocktailReducer,
  },
});


