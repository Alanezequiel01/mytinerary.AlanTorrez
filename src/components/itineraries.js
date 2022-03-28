import React, { useEffect, useState } from "react";
import "../styles/itineraries.css";
import { ChevronDownOutline } from "react-ionicons";
import Activity from "./activities";
import LikeDislike from "./likeDislike";
import { connect } from "react-redux";
import activitiesAction from "../redux/actions/activitiesAction";
import Comments from "./comments"


const Itinerary = (props) => {
  const reload = props.reload
  const setReload = props.setReload
  
  //Para el boton desplegable
  let card;

  useEffect(() => {
    card = document.querySelector(".card");
  }, []);

  function dropdown() {
    card.classList.toggle("active");
  }

  return (
    <div className="body">
      <div className="card active">
        <div className="content">
          <div className="profile">
            <img
              src={process.env.PUBLIC_URL + `/img_itinerarios/${props.data.image}`}
              className="Profile Img"
            />
          </div>
          <div className="tittles">
            <h2>{props.data.username}</h2>
            <h2>{props.data.tittle}</h2>
          </div>
          <div className="hashAndDesc">
            <p className="desc">{props.data.description}</p>
            <p className="hash">{props.data.hashtags}</p>
          </div>
          <div className="icons">
          
            <LikeDislike likes = {props.data.likes} id = {props.data._id} reload={reload} setReload={setReload}/>
            {/* <h3>
              {data1.likes}
              <img src={Like} className="iconLike" />
            </h3> */}
            <p>{"💵".repeat(props.data.price)}</p>
          </div>
        </div>
        <div className="nav">
         <Activity idItinerary = {props.data._id} reload={reload} setReload={setReload}/>
        </div>
        <div className="toggle">
          <ChevronDownOutline onClick={dropdown} className="icon" />
        </div>
      </div>
      <>
        <Comments comments = {props.data.comments} id = {props.data._id} reload={reload} setReload={setReload}/>
      </>
    </div>
  )}

const mapDispatchToProps = {
  fetchActivityForItinerary: activitiesAction.fetchActivityForItinerary,
};

export default connect(null, mapDispatchToProps)(Itinerary);
