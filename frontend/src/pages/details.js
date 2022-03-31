import React, {useEffect, useState}from 'react'
import "../styles/styles.css";
import HeroDetails from '../components/heroDetails';
import Itinerary from '../components/itineraries';
import {useSelector, useDispatch} from 'react-redux';
import itinerariesAction from "../redux/actions/itinerariesAction";
import { useParams } from 'react-router-dom';
import sinResultados from "../assets/nubeItinerarios.png"

const Details = (props) => {
  const [reload, setReload] = useState(false)
  const {id} = useParams()

  const dispatch = useDispatch()
  const itinerarios = useSelector(store => store.itinerariesReducer.itinerariesCity);
  
  useEffect(()=>{
    dispatch(
      itinerariesAction.fetchItineraryForCity(id),
      )},[reload])

  return (
    <>
    <HeroDetails/>
    
    {itinerarios.length > 0? itinerarios.map(itinerario => <Itinerary reload={reload} setReload={setReload} data={itinerario}/>)
    : <h1 className="noResults">PLEASE EXCUSE US, NO ITINERARIES WERE FOUND FOR THIS CITY. <img src={sinResultados} className="imagenBusqueda"/></h1>
    }



   </>
  );
}

export default Details;
