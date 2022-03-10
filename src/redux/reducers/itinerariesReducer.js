const initialState = {
    itineraies: [],
    aux: [],
    itinerariesCity: ["hola"],
  };
  
  const itinerariesReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "fetch":
        return {
          ...state,
          itineraries: action.payload,
          aux: action.payload,
        };

      case "fetchForCity":
        return {
          ...state,
          itinerariesCity: action.payload
        };

      default:
        return state;
    }
  };
  
  export default itinerariesReducer;
  