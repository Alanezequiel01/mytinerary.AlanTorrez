import React, {useEffect}from 'react'
import "../styles/styles.css";
import HeroDetails from '../components/heroDetails';
import Itinerary from '../components/itineraries';
import {connect, useSelector, useDispatch} from 'react-redux'
import itinerariesAction from "../redux/actions/itinerariesAction"
import { useParams } from 'react-router-dom';

const Details = (props) => {
  const {id} = useParams()
  console.log(id)

  const dispatch = useDispatch()
  const itinerarios = useSelector(store => store.itinerariesReducer.itinerariesCity)
  console.log(itinerarios)
  
  useEffect(()=>{
    dispatch(itinerariesAction.fetchItineraryForCity(id))
  },[])


  return (
    <>
    <HeroDetails/>
    {itinerarios.length > 0 && itinerarios.map(itinerario => <Itinerary data={itinerario}/>)}
   </>
  );
}

export default Details;
