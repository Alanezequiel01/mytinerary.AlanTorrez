import React from 'react'
import './App.css';
import NavBar from './components/nav.js'
import Footer from './components/footer'
import Cities from './pages/cities'
import Home from './pages/home'
import Details from './pages/details';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  
  return (
      <BrowserRouter>
    <div className="App">
      <NavBar/>

      <Routes>
      <Route path="/cities" element={<Cities/>}/> 
      <Route path="/home" element={<Home/>}/> 
      <Route path="/details/:id" element={<Details/>}/> 
      <Route path="*" element={<Home/>}/> 
      </Routes>

      <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
