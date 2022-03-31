import axios from "axios";
 
const activitiesAction = {

    fetchActivities:() =>{
        return async(dispatch,getState) => {
            const res = await axios.get(`https://mytinerary-torrez-alan.herokuapp.com/api/V1/activities`)
            dispatch({type: 'fetch' ,payload:res.data.response.actividades});
        }
    },

    fetchActivityForItinerary: (id) =>{
        return async () =>{
            try{
                const res = await axios.get(`https://mytinerary-torrez-alan.herokuapp.com/api/V1/activities/`+id)
                return{
                    success: true,
                    response: res.data.response
                }
            }
            catch(err){
                console.log(err)
            }
        }
    },

}

export default activitiesAction