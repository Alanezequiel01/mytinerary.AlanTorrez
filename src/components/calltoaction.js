import React from 'react'
import "../styles/styles.css";
import Bote from '../assets/bote.jpg'
import {Link as LinkRouter} from "react-router-dom"

const CallToAction = () => {
  
  return (
    <div className="boxCallToAction">
      <div className="call">
        <h1>Fun experiences awaits you out there! </h1>
        <LinkRouter to="cities" className="links">
        <h3 className="btnCall">LET'S GO</h3>
        </LinkRouter>  
      </div>
      <img src={Bote} className="imgCall"/>
    </div>
  );
}

export default CallToAction;
