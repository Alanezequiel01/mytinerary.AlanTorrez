import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cities from './data'


// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation"
import "../styles/carousel.css"
import avion1 from '../assets/avion1.jpg'
import avion2 from '../assets/avion2.jpg'

//Card
import { Card } from 'react-bootstrap';
import CardMedia from '@mui/material/CardMedia';
import "../styles/card.css"

// import required modules
import { Grid, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div className="container">
    <div className="boxSwiper">
      <div className="vectores">  
      <img src={avion1} className="aviones"/>       
    <h1 className="tittleCarousel"> My Tineraries</h1>
    <img src={avion2} className="aviones"/>
    </div> 
      <Swiper
      className="swiper"
        slidesPerView={1}
        grid={{
          rows: 2, 
        }}
        spaceBetween={25}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        }} 
        modules={[Grid, Pagination, Navigation]}
      >
        {cities.map(card =>
        <SwiperSlide>
            <Card className="carta text-white">
            <CardMedia
                    className="imagenCiudad"
                    component="img"
                    image={process.env.PUBLIC_URL+`img_ciudades/${card.image}` }
                    alt="Image City"
            />
                <Card.ImgOverlay className="textCard">
                <Card.Title>{card.city} - {card.country}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </SwiperSlide>
        )} 
      </Swiper>
    </div>
    </div>
  );
}
