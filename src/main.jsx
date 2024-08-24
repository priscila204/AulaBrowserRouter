import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/Layout'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
         <Route path="/" elemet={<Layout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



