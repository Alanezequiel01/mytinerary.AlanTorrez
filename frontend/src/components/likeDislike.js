import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import itinerariesAction from "../redux/actions/itinerariesAction";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../styles/itineraries.css";

const LikeDislike = (props) => {

    const reload = props.reload
    const setReload = props.setReload
    
      async function likesOrDislikes() {
        await props.likeDislike(props.id)
        setReload(!reload)
      }

  return (
    <>
    {props.user ?
              (<button className="botonLike" onClick={likesOrDislikes}>{props.likes?.includes(props.user.id) ?
                <span style={{  fontSize:30 }}><FavoriteIcon className="MuiSvgIcon-root"/></span> :
                <span style={{  fontSize:30 }}><FavoriteBorderIcon/></span>}</button>)

              : (<span style={{  fontSize:30 }}><FavoriteBorderIcon/></span>)}

          <h3 style={{  margin:"13px 0 0 5px", color:"black ",fontSize:30 }}>{props.likes?.length}</h3>
    </>
  );
};

const mapDispatchToProps = {
    likeDislike: itinerariesAction.likeDislike
  }
  
  const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LikeDislike);


