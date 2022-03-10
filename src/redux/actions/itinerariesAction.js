import axios from "axios";
 
const itinerariesAction = {

    fetchItineraries:() =>{
        return async(dispatch,getState) => {
            const res = await axios.get(`http://localhost:4000/api/V1/itineraries`)
            dispatch({type: 'fetch' ,payload:res.data.response.itinerarios})
        }
    },
    

    fetchOneItinerary: (id) =>{
        return async (dispatch, getState) =>{
            const res = await axios.get(`http://localhost:4000/api/V1/itineraries`)
            dispatch({type: 'fetchOne', payload: res.data.response.itineraries})
        }
    },

    fetchItineraryForCity: (id) =>{
        return async (dispatch, getState) =>{
            try{
                const res = await axios.get(`http://localhost:4000/api/V1/itineraries/`+id)
                console.log(res)
                dispatch({type: 'fetchForCity', payload: res.data.response})
            }
            catch(err){
                console.log(err)
            }
        }
    },

}

export default itinerariesAction