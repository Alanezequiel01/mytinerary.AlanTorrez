import React from 'react'
import './App.css';
import NavBar from './components/nav'
import Hero from './components/hero'
import CallToAction from './components/calltoaction'
import Carousel from './components/carousel'
import Footer from './components/footer'
import Cities from './components/cities'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>

      <Routes>
      <Route path="/cities" element={<Cities/>}/> 
      </Routes>

      <Hero/>
      <CallToAction/>
      <Carousel/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
