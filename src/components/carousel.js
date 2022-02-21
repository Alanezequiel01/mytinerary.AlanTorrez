import React, { useRef, useState } from "react"; 
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";  
// Import Swiper styles 

import "swiper/css"; 
import "swiper/css/pagination"; 
import "../styles/carrousel.css"; 
import "../styles/cards.css"
import "../styles/styles.css"
import ciudades from './data'  
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "swiper/css/grid"
// import required modules

import { Pagination, Autoplay, Grid } from "swiper";   
export default function Gallery() {   return (     
    <div className="gallery"> 
    <h1 className="tittleCarousel">Popular MyTineraries</h1>      
    <Swiper         
        slidesPerView={2}      
        slidesPerGroup={2}         
        spaceBetween={30}     
        grid={{
            rows:2
        }}    
        pagination={{           
            clickable: true,         
        }}         
        modules={[Pagination, Autoplay, Grid]}         
        autoplay={{delay: 8000, disableOnInteraction: false }}         
        className="mySwiper"         
        breakpoints={{           
            "@0.00":{             
                slidesPerView: 1,             
                spaceBetween: 10,           
            },           
            "@0.75":{             
                slidesPerView: 2,             
                spaceBetween: 10,           
            },           
            "@1.00":{             
                slidesPerView: 2,             
                spaceBetween: 10,
            },
            "@1.50":{             
                slidesPerView: 2,             
                spaceBetween: 10,           
            }         
        }}       
        >          
        {ciudades.map(card =>           
        <SwiperSlide>                          
            <div className="prueba">                
            <Card className="card" sx={{ marginTop:-5}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    width="400"
                    image={process.env.PUBLIC_URL+`img_ciudades/${card.image}` }
                    alt="image${card.place}"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {card.place}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>            
            </div>          
        </SwiperSlide>                  
        )}       
        </Swiper>     
        </div>   
        ); 
    }
