import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Test from './Test'
import Form from './Form'
import AdvancedForm from './AdvancedForm';




function App() {
  return (
    <div>
    
      <BrowserRouter>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="test">Test</Link>
        <Link to ="form">Form</Link>
        <Link to ="advancedForm">AdvancedForm</Link>

        
      </nav>
      <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="test" element={<Test/>} /> 
          <Route path="form" element={<Form/>} /> 
          <Route path="advancedForm" element={<AdvancedForm/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
