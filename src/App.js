import React from 'react'
import './App.css';
import NavBar from './components/nav'
import Footer from './components/footer'
import Cities from './components/cities'
import Home from './components/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  
  return (
      <BrowserRouter>
    <div className="App">
      <NavBar/>

      <Routes>
      <Route path="/cities" element={<Cities/>}/> 
      <Route path="*" element={<Home/>}/> 
      </Routes>

      <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
