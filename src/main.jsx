import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import  Cardapio from './listarProdutos'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Cardapio/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)



