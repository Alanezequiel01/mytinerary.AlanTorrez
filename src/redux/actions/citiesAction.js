import axios from "axios";
 
const citiesAction = {

    fetchCities:() =>{
        return async(dispatch,getState) => {
            const res = await axios.get(`http://localhost:4000/api/V1/cities`)
            dispatch({type: 'fetch' ,payload:res.data.response.cities})
        }
    }
},

export default citiesAction