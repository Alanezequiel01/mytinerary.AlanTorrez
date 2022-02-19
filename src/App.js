import React from 'react'
import './App.css';
import NavBar from './components/nav'
import Carousel from './components/carousel'
import Hero from './components/hero'

const App = () => {
  
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Carousel/>

    </div>
  );
}

export default App;
