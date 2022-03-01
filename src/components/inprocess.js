import React, { useEffect, useState } from 'react'
import "../styles/styles.css";

//CARD
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import "../styles/cardCities.css"; 

//DATABASE
import  {getCities}  from '../apiCalls'

const InProcess = () => {
  const [cities, setCities] = useState()
  const [reload, setReload] = useState(false)
  const [modid, setModId]= useState()

  useEffect(()=>{
    getCities()
    .then(response=>setCities(response.data.response.ciudades))
    
    },[reload])
  
  return (

    <div className="boxInProcess">
      {cities?.map(data=>
      <Card sx={{ maxWidth: 345 }} className="cardDinamic">
        <div className='flexHeader'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe"> 
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
      </CardActions>
    </Card>

)}
      
    </div>
  );
}

export default InProcess;
