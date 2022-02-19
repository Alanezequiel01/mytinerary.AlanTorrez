import React from 'react'
import "../styles/styles.css";
import globito from '../assets/globo.png'


const Hero = () => {
  
  return (
    <div className="containerHero">
      <div className="containerLogo">
        <img src={globito} className="logo"/>
          <h1>MyTinerary</h1>
          <p className="slogan">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
      </div>
    </div>
  );
}

export default Hero;
