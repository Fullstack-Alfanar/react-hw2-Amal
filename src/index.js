import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shoes from './components/navbar1/Shoes';
import Employers from './components/navbar1/Employers'
import Home from './components/navbar1/Home';
import EmploymentTable from './components/navbar1/EmploymentTable';
import ShoeTable from './components/navbar1/ShoeTable';

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

