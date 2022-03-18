import React, {useEffect}from 'react'
import "../styles/styles.css";
import HeroDetails from '../components/heroDetails';
import Itinerary from '../components/itineraries';
import {useSelector, useDispatch} from 'react-redux'
import itinerariesAction from "../redux/actions/itinerariesAction"
import { useParams } from 'react-router-dom';

const Details = (props) => {
  const {id} = useParams()

  const dispatch = useDispatch()
  const itinerarios = useSelector(store => store.itinerariesReducer.itinerariesCity)
  
  useEffect(()=>{
    dispatch(itinerariesAction.fetchItineraryForCity(id))
  },[])


  return (
    <>
    <HeroDetails/>
    {itinerarios.length > 0? itinerarios.map(itinerario => <Itinerary data={itinerario}/>)
    : <h1 className="noResults">Please excuse us, no itineraries were found for this city.</h1>
    }
   </>
  );
}

export default Details;
