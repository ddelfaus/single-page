import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Test from './Test'
import Nav from './Nav'



function App() {
  return (
    <div>
    
      <BrowserRouter>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="test">Test</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="test" element={<Test/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
