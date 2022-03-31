import React from 'react'
import "../styles/styles.css";
import "../styles/botonHome.css"
import Imagen from '../assets/valija.png'
import {Link as LinkRouter} from "react-router-dom"

const CallToAction = () => {
  
  return (
    <div className="boxCallToAction">
      <div className='button'>
        <span className='contenedorBotonYCall'>
        <h3>Fun experiences awaits you out there! </h3>
        <LinkRouter to="cities" className="normalLink">
        <button class="btnLetsGo"><h4>LET'S GO</h4></button>
        </LinkRouter>  
        </span>
        </div>
      <img src={Imagen} className="imgCall"/>
    </div>
  );
}

export default CallToAction;
