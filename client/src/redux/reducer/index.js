import {
  GET_DOGS,
  GET_DOG_ID,
  SEARCH_DOG,
  GET_TEMPERAMENTS,
  POST_DOG,
  FILTER_TEMPERAMENT,
  FILTER_CREATED,
  ORDER_ALPHA,
  ORDER_WEIGHT,
} from "../actions";

let initialState = {
  dogs: [],
  filterDogs: [],
  temperament: [],
};

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        filterDogs: action.payload,
      };
    case GET_DOG_ID:
      return {
        ...state,
        dogs: action.payload,
      };
    case SEARCH_DOG:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperament: action.payload,
      };
    case POST_DOG:
      return {
        ...state,
      };
    case FILTER_TEMPERAMENT:
      let filteredTemperaments = state.filterDogs;
      filteredTemperaments.filter((e) => action.payload === e.name);
      return {
        ...state,
        dogs: filteredTemperaments,
      };
    case FILTER_CREATED:
      let filteredCreated = state.filterDogs;
      if (action.payload === "Posteados")
      filteredCreated = state.dogs.filter((e) => e.created === true);
      else if (action.payload === "Existentes")
      filteredCreated = state.dogs.filter((e) => e.created === true);
      return {
        ...state,
        dogs: filteredCreated,
      };
    case ORDER_ALPHA:
      let orderedAlpha;
      if (action.payload === "Ascendente") {
        orderedAlpha = state.dogs.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      } else if (action.payload === "Descendente") {
        orderedAlpha = state.dogs.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      }
      return {
        ...state,
        dogs: orderedAlpha,
      };
    case ORDER_WEIGHT:
      let orderedWeight;
      if (action.payload === "Ascendente") {
        orderedWeight = state.dogs.sort((a, b) => {
          if (a.weight.metric > b.weight.metric) return 1;
          if (a.weight.metric < b.weight.metric) return -1;
          return 0;
        });
      } else if (action.payload === "Descendente") {
        orderedWeight = state.dogs.sort((a, b) => {
          if (a.weight.metric > b.weight.metric) return -1;
          if (a.weight.metric < b.weight.metric) return 1;
          return 0;
        });
      }
      return {
        ...state,
        dogs: orderedWeight,
      };
    default:
      return state;
  }
};
