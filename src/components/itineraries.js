import React, {useEffect} from 'react'
import "../styles/itineraries.css";
import ProfileImg from "../assets/john_petrucci.jpg"
import {ChevronDownOutline} from 'react-ionicons'
    

const Itinerary = () => {
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
                <img src={ProfileImg} className="Profile Img"/>
                </div>
                <h2>John Petrucci</h2>
            </div>
            <ul className="nav">
                <li>• Index</li>
                <li>• Edti Profile</li>
                <li>• Settings</li>
                <li>• Support</li>
            </ul>
            <div className="toggle">
                <button class="btn">
                    <ChevronDownOutline onClick={dropdown} className='icon'/>
                </button>
            </div>
        </div>
        </div>
    );

}

export default Itinerary