import React, { useEffect, useState } from 'react'
import "../styles/itineraries.css";
import Like from "../assets/heart.png"
import Cash from "../assets/money.png"
import {ChevronDownOutline} from 'react-ionicons'
import {connect} from 'react-redux'
import itinerariesAction from "../redux/actions/itinerariesAction"
    

const Itinerary = ({data}) => {

    let card;

    useEffect(()=>{
        card = document.querySelector(".card");
      },[])
    

    function dropdown (){
        card.classList.toggle("active")
    }

    return(
        <div className="body">
        <div className="card">
            <div className="content">
                <div className="profile">
                <img src={process.env.PUBLIC_URL+`/img_itinerarios/${data.image}`} className="Profile Img"/>
                </div>
                <div className="tittles">
                    <h2>{data.username}</h2>
                    <h2>{data.tittle}</h2>
                </div>
                <div className="hashAndDesc">
                <p className="desc">{data.description}</p>
                <p className="hash">{data.hashtags}</p>
                </div>
                <div className="icons">
                    <h3>{data.likes}<img src={Like} className="iconLike"/></h3>
                    <p><img src={Cash} className="iconLike"/>
                    <img src={Cash} className="iconLike"/></p>

                </div>
            </div>
            <div className="nav">
                <h1>Under Construction</h1>
            </div>
            <div className="toggle">
                    <ChevronDownOutline onClick={dropdown} className='icon'/>
            </div>
        </div>
        </div>
    );

}

  export default Itinerary;
  