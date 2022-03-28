import React, { useEffect, useState } from "react";
import "../styles/activities.css";
import "../styles/itineraries.css"
import { connect } from "react-redux";
import activitiesAction from "../redux/actions/activitiesAction";

const Activity = (props) => {
    const reload = props.reload
    const setReload = props.setReload

    const [activities, setActivities] = useState(null);

  useEffect(() => {
    props
      .fetchActivityForItinerary(props.idItinerary)
      .then(res => setActivities(res.response))
  }, [props.idItinerary]);

  return (
    <>
    {activities?.map(actividad => 
     
        <div
          className="backgroundActivity"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/img_actividades/${actividad.image}')`,
            backgroundSize:"cover"
          }}
        >
          <div className="backgroundTittle">
            <h2 className="tittle">{actividad.tittle}</h2>
          </div>
        </div>
        )}
    </>
  )
}

const mapDispatchToProps = {
  fetchActivityForItinerary: activitiesAction.fetchActivityForItinerary,
};

export default connect(null, mapDispatchToProps)(Activity);
