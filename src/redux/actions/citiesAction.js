import axios from "axios";
 
const citiesAction = {

    fetchCities:() =>{
        return async(dispatch,getState) => {
            const res = await axios.get('http://localhost:4000/api/V1/cities')
            dispatch({type:"fetch", payload:res.data.response.ciudades})
        }
    },
    
    filter: (value, cities) =>{
        return async(dispatch, getState) =>{
            dispatch({type:"filter", payload:{cities, value}})
        }
    },

    fetchOneCity: (id) =>{
        return async (dispatch, getState) =>{
            try{const res = await axios.get(`http://localhost:4000/api/V1/cities/${id}`)
            dispatch({type:"fetchOne", payload:res.data.response.ciudades})
        }
        catch(err){
            console.log(err)
        }
    }
    },

   /*  deleteCity:(id)=>{
        return async (dispatch, getState) => {
            const token = localStorage.getItem('token')
            console.log(token)
            try{
                const res = await axios.delete(`http://localhost:4000/api/V1/cities/`+id,{
                    headers:{
                        'Authorization': 'Bearer ' + token
                    }
                })
                dispatch({type:'delete', payload:res.data.response.cities})     
            }catch(err){
                console.log(err)
            }
        }
    }, */

    /* cargarCiudad:(country, city, description, date, image) =>{
        return async (dispatch, getState) =>{
            const respues = await axios.post(`http://localhost:4000/api/V1/cities`,{country, city, description, date, image})
            dispatch({type:'cargarCiudad', payload:res.data.response.cities})
        }
    } */

};


export default citiesAction