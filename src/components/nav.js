import * as React from 'react';
import globito from '../assets/globo.png'
import user from '../assets/user.png'
import {Link as LinkRouter} from "react-router-dom"

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="box1nav">
        <img src={globito} className="logoPequeño" />
        <LinkRouter to="home" className="links">
        <h2 className="btnNav">HOME</h2>
        </LinkRouter>
        <LinkRouter to="cities" className="links">
        <h2 className="btnNav">CITIES</h2>
        </LinkRouter>
      </div>

      <div className="box2nav">
      <img src={user} className="user" />
      </div>

    </div>
  );
}