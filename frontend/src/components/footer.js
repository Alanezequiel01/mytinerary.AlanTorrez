import React from 'react'
import "../styles/styles.css";
import {Link as LinkRouter} from "react-router-dom"
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import whatsapp from '../assets/whatsapp.png'
import MenuItem from '@mui/material/MenuItem';

const Footer = () => {
  
  return (
    <div className='contenedorFooter'>
    <div className="boxFooter">
      <div className="info">
        <div className="boxInfo">
        <h5 className='titulosFooter'>CONTACT US</h5>
        <p>Nashville, Tennessee 37319</p>
        <p>contact@mytinerary.com</p>
        <p>+1 556-445-7847</p>
        </div>
        <div>
        <h5 className='titulosFooter'>CATEGORIES</h5>
        <p>Terms & Shell</p>
        <p>Privacy</p>
        <p>Help & support</p>
        </div>
        <div className='redesSociales'>
        <h5 className='titulosFooter'>FOLLOW US</h5>
        <div>
        <img src={instagram} className="logoRedSocial" />
        <img src={facebook} className="logoRedSocial" />
        <img src={youtube} className="logoRedSocial" />
        <img src={whatsapp} className="logoRedSocial" />
        </div>
        </div>
      </div>
    </div>
    <div className="cierre">
    <p className='copyright'>Copyright © 2022 All right reserved | Alan Ezequiel Torrez</p>
      <div className='botonesLink'>
        <MenuItem>
        <LinkRouter to="home" className="normalLink">HOME</LinkRouter>
        </MenuItem>
        <MenuItem>
        <LinkRouter to="cities" className="normalLink">CITIES</LinkRouter>
        </MenuItem>
    </div>
  </div>
  </div>
  );
}

export default Footer;
