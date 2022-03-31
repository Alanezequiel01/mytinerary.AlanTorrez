const initialState = {
  cities: [],
  aux: [],
  citiesFilter: [],
  city: [],
};

const citiesReducer = (state = initialState, action) => {

  switch (action.type) {
    case "fetch":
      return {
        ...state,
        cities: action.payload,
        aux: action.payload,
        citiesFilter: action.payload,
      };

    case "filter":
      const filter = action.payload.cities.filter((cities) =>
        cities.city.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())
      );

      return {
        ...state,
        citiesFilter: filter,
      };

    case "fetchOne":
      return {
        ...state,
        city: action.payload
      };

    /* case 'delete':
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
            }  */

    default:
      return state;
  }
};

export default citiesReducer;
