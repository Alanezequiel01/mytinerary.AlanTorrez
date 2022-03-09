const initialState = {
    cities:[],
    aux:[]      
}

const citiesReducer = (state = initialState, action) => {

    switch(action.type){
        case 'fetch':
            return {
                ...state,
                cities: action.payload,
                aux: action.payload,
            }

        case 'delete':
            return {
                ...state,
                cities: action.payload,
            }
        
        case 'cargarCiudad':
            let cities = [...state.cities]
            cities.push(action.payload)
            return {
                ...state,
                cities,
                aux:[...cities]
            }    

        case 'filtro':
            const filtrado = action.payload.cities.filter((cities) => 
            cities.city.toLowerCase()
            )

            return{
                ...state,
                cities: filtrado
            }
        default:
            return state    
                
    }
}

export default citiesReducer