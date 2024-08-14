import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route parh='/Home' element={<Layout/>}/>
        <Route parh='/Oferta' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



