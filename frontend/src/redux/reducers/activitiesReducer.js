const initialState = {
    activities: [],
    aux: [],
    activitiesItinerary: [],
  };
  
  const activitiesReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "fetch":
        return {
          ...state,
          activities: action.payload,
          aux: action.payload,
        };

      case "fetchForItinerary":
        return {
          ...state,
          activitiesItinerary: action.payload
        };

      default:
        return state;
    }
  };
  
  export default activitiesReducer;
  