import React from 'react'
import "../styles/styles.css";
import Itinerary from '../components/itineraries';
import {useParams} from 'react-router-dom'


const Details = () => {
  const {id}= useParams()
  console.log(id)
  return (
   <Itinerary/>
  );
}

export default Details;
