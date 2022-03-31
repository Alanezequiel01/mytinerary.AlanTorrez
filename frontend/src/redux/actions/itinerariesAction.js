import axios from "axios";
 
const itinerariesAction = {

    fetchItineraries:() =>{
        return async(dispatch,getState) => {
            const res = await axios.get(`https://mytinerary-torrez-alan.herokuapp.com/api/V1/itineraries`)
            dispatch({type: 'fetch' ,payload:res.data.response.itinerarios})
        }
    },
    

    fetchOneItinerary: (id) =>{
        return async (dispatch, getState) =>{
            const res = await axios.get(`https://mytinerary-torrez-alan.herokuapp.com/api/V1/itineraries`)
            dispatch({type: 'fetchOne', payload: res.data.response.itineraries})
        }
    },

    fetchItineraryForCity: (id) =>{
        return async (dispatch, getState) =>{
            try{
                const res = await axios.get(`https://mytinerary-torrez-alan.herokuapp.com/api/V1/itineraries/`+id)
                dispatch({type: 'fetchForCity', payload: res.data.response})
            }
            catch(err){
                console.log(err)
            }
        }
    },

    likeDislike: (itineraryId) => {
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`https://mytinerary-torrez-alan.herokuapp.com/api/V1/like/${itineraryId}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }

}

export default itinerariesAction