import React from 'react'
import "../styles/styles.css";
import cabaña from '../assets/imagen_cabaña.jpg'
import {Link as LinkRouter} from "react-router-dom"

const CallToAction = () => {
  
  return (
    <div className="boxCallToAction">
      <div className="call">
        <h1>Fun experiences awaits you out there! </h1>
        <LinkRouter to="cities" className="links">
        <h3 className="btnCall">Let's Go</h3>
        </LinkRouter>  
      </div>
      <img src={cabaña} className="cabaña"/>

      
    </div>
  );
}

export default CallToAction;
