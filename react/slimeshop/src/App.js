import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom'

//외부 source들
import List from './components/List.js'
import Main from './components/Main.js'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List></List>} />
        <Route path="/cart" element={<div></div>} />
      </Routes>
    </div>
  );
}


export default App;
