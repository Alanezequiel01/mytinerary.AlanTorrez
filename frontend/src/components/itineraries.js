import React, { useEffect, useState } from "react";
import "../styles/itineraries.css";
import "../styles/comments.css";
import { ChevronDownOutline } from "react-ionicons";
import Activity from "./activities";
import LikeDislike from "./likeDislike";
import { connect } from "react-redux";
import activitiesAction from "../redux/actions/activitiesAction";
import Comments from "./comments"
import Accordion from 'react-bootstrap/Accordion'


const Itinerary = (props) => {
  const reload = props.reload
  const setReload = props.setReload
  
  //Para el boton desplegable

  function dropdown() {
    setToggle(!toggle)
  }
  const [toggle, setToggle] = useState(true)

  return (
    <div className="body">
      <div className={toggle?"card active": "card"}>
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
            <p className="billete">{"💵".repeat(props.data.price)}</p>
          </div>
        </div>
        <div className="nav">
          <h3 className="tituloActivities">ACTIVITES</h3>
          <div className="actividades">
         <Activity idItinerary = {props.data._id} reload={reload} setReload={setReload}/>
         </div>
        </div>
        <div className="toggle">
          <ChevronDownOutline onClick={dropdown} className="icon" />
        </div>
      </div>
      <>
     <Accordion defaultActiveKey="1">
            <Accordion.Item className="comentarios" eventKey="0">
              <Accordion.Header><h4>Comments</h4></Accordion.Header>
              <Accordion.Body className="cuerpoComentarios">
              <Comments itinerario = {props.data} id = {props.data._id} reload={reload} setReload={setReload}/>
      
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </>
    </div>
    
  )}

const mapDispatchToProps = {
  fetchActivityForItinerary: activitiesAction.fetchActivityForItinerary,
};

export default connect(null, mapDispatchToProps)(Itinerary);
