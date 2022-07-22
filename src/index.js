import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shoes from './pages/Shoes';
import Employers from './pages/Employers'
import EmploymentTable from './pages/EmploymentTable';
import ShoeTable from './pages/ShoeTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} ></Route>
      <Route path="/shoes" element={<Shoes/>} ></Route>
      <Route path="/employers" element={<EmploymentTable/>} ></Route>
      <Route path="/shoestable" element={<ShoeTable/>} ></Route>
      <Route path="/contact" element={<Employers/>} ></Route>


    </Routes>


    </BrowserRouter>

);

