import React from 'react'
import "../styles/styles.css";
import {Link as LinkRouter} from "react-router-dom"
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import whatsapp from '../assets/whatsapp.png'

const Footer = () => {
  
  return (
    <div className="boxFooter">
      <div className="info">
        <div>
        <p>Nashville, Tennessee 37319</p>
        <p>contact@mytinerary.com</p>
        <p>+1 556-445-7847</p>
        <p>+34 556-445-8564</p>
        </div>
        <div>
        <div className="box1nav">
        <LinkRouter to="home" className="links">
        <h2 className="btnNav">HOME</h2>
        </LinkRouter>
        <LinkRouter to="cities" className="links">
        <h2 className="btnNav">CITIES</h2>
        </LinkRouter>
      </div>
        </div>
      </div>
      <div className="cierre">
        <div>
        <img src={instagram} className="user" />
        <img src={facebook} className="user" />
        <img src={youtube} className="user" />
        <img src={whatsapp} className="user" />
        </div>
        <div>
          <p>© 2022 All right reserved | Alan Ezequiel Torrez</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
