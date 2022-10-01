import React, { useState } from 'react';
import './styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home'
import Courses from './components/courses'
import Payment from './pages/payment';
import Footer from './layouts/footer'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <div className="main-app">
        <Routes>
          <Route path='/courses' element={<Courses />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>

      <footer>{<Footer />}</footer>
    </div>
  );
}

export default App;
