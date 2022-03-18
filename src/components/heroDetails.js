import React, { useEffect, useState } from 'react'
import "../styles/heroDetails.css";
import Idioma from '../assets/idioma.png';
import Moneda from '../assets/moneda.png';
import {connect} from 'react-redux';
import citiesAction from "../redux/actions/citiesAction";
import { useParams } from 'react-router-dom';

function HeroDetails (props) {

  const [reload, setReload] = useState(false)
  const {id} = useParams()

  useEffect(()=>{
    setReload(!reload)
  },[])

  useEffect(()=>{
    props.fetchOneCity(id)
  },[reload])
  
  return (
    <div className="containerHeroDetails" style={{backgroundImage:`url('${process.env.PUBLIC_URL}/img_ciudades/${props.data?.image}')` }}>
      <div className='containerHeroDetails2'>
        <h1 className="city"> <b>{props.data?.city}</b></h1>
      <div className="containerDinamic">
            <img src={process.env.PUBLIC_URL+`/img_banderas/${props.data?.flag}`} className="imgBandera"/>
            <div className="lenguajePais">
            <img src={Idioma} className="imgLogos"/>
            <h1 className="nombreidioma">{props.data?.language}</h1>
            </div>  
            <div className="monedaPais">
            <img src={Moneda} className="imgLogos"/>
            <h1 className="nombreidioma">{props.data?.money}</h1>
            </div>
      </div>
      </div>
    </div>
  );
}

const mapDispatchToProps={
  fetchOneCity: citiesAction.fetchOneCity,
}

const mapStateToProps = (state) =>{
  
  return{
    data: state.citiesReducer.city
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HeroDetails);
