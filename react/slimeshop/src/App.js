import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom'

//외부 source들
import Cart from './components/Cart.js'
import Main from './components/Main.js'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<div></div>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}


export default App;
