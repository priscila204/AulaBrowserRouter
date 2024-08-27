import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Produtos from './Produto/index';
import Oferta from './Oferta/index';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/prod' element={<Produtos/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Oferta />} />
    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
