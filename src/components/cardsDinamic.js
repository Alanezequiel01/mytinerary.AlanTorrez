import React, { useEffect, useState } from 'react'
import "../styles/styles.css";
import {connect} from 'react-redux';
import citiesAction from "../redux/actions/citiesAction";

//CARDS
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import "../styles/cardCities.css"; 
import {Link as LinkRouter} from "react-router-dom"

//INPUT SEARCH
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const CardsDinamic = (props) => {
  
  useEffect(()=>{
    props.fetchCities()
  },[])

  const filtroCities = (event) =>{
    props.filter(event.target.value, props.cities)
  } 

  return (

    <div className="boxInProcess">
      <div className="containerInput"> 
        <input
        className="form-control inputSearch"
        placeholder="Search city or country"
        onChange={filtroCities}
        />
        <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      <div className="boxInProcess2">
      {props.citiesFilter.length >0? props.citiesFilter?.map(data=>
      <Card sx={{ maxWidth: 345 }} className="cardDinamic">
        <div className='flexHeader'>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "#03B5AA"}} aria-label="recipe"> 
            A
          </Avatar>
        }
        />
        <div className="titAndDate">
        <h5>{data.city}, {data.country}</h5>
        <p>{data.date}</p>
        </div>
        </div>
      <CardMedia
        component="img"
        height="194"
        image={process.env.PUBLIC_URL+`img_ciudades/${data.image}`}
        alt="Image city"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
         <LinkRouter to={`/details/${data._id}`}>  
        <button className="cardsButton"> See More...</button>
         </LinkRouter>
      </CardActions>
    </Card>

): <h1>No results found</h1>}
</div>
</div>
  );
}

const mapDispatchToProps = {
  fetchCities: citiesAction.fetchCities,
  filter: citiesAction.filter
}

const mapStateToProps = (state) =>{
  
  return{
    cities: state.citiesReducer.cities,
    citiesFilter: state.citiesReducer.citiesFilter,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardsDinamic);
