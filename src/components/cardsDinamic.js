import React, { useEffect, useState } from 'react'
import "../styles/styles.css";

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

//DATABASE
import axios from 'axios';

//INPUT SEARCH
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const InProcess = () => {
  const [cities, setCities] = useState([]);
  const [cardsCities, setCardsCities] = useState([]);
  const [search, setSearch] = useState("");

  const peticionGet= async()=>{
    await axios.get("http://localhost:4000/api/V1/cities")
  .then(response=>{
    setCardsCities(response.data.response.ciudades);
    setCities(response.data.response.ciudades);
    }).catch(error=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    peticionGet()
  },[])


  const handleChange=e=>{
    setSearch(e.target.value);
    filter(e.target.value);
  }

  const filter=(terminoBusqueda)=>{
    var resultadoBusqueda=cardsCities.filter((elemento)=>{
      if(elemento.city.toString().toLowerCase().startsWith(terminoBusqueda.toLowerCase().trim())
      || elemento.country.toString().toLowerCase().startsWith(terminoBusqueda.toLowerCase().trim())
      ){
        return elemento;
      }
    });
    setCities(resultadoBusqueda);
  }

  return (

    <div className="boxInProcess">
      <div className="containerInput"> 
        <input
        className="form-control inputSearch"
        value={search}
        placeholder="Search city or country"
        onChange={handleChange}
        />
        <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      <div className="boxInProcess2">
      {cities?.map(data=>
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
        image={process.env.PUBLIC_URL+`img_ciudades/${data.image}` }
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
        
         <LinkRouter to="/details">  
        <button className="cardsButton"> See More...</button>
         </LinkRouter>
      </CardActions>
    </Card>

)}
</div>
      
    </div>
  );
}

export default InProcess;
