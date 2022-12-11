import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddEdit from "./pages/CocktailData"
import Home from "./pages/Home"
import View from "./pages/View"
import "./index.css"
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/view/:id" element={<View/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
