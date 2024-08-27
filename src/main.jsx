import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import  Cardapio from './listarProdutos'
import Home from './Home/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<Home/>}></Route>
        <Route path='/senario' element={<Cardapio/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)



