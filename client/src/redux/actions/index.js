import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_ID = "GET_DOG_ID";
export const SEARCH_DOG = "SEARCH_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const POST_DOG = "POST_DOG";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_ALPHA = "FILTER_TALPHA";
export const ORDER_WEIGHT = "FILTER_WEIGHT";
export const RESET_FILTERS = "RESET_FILTERS";

let url = "http://localhost:3001/";

let getDogs = () => {
  return async (dispatch) => {
    return await axios
      .get(`${url}dogs`)
      .then((dogs) => {
        dispatch({
          type: GET_DOGS,
          payload: dogs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

let getDogId = (id) => {
  return async (dispatch) => {
    return await axios
      .get(`${url}dogs/${id}`)
      .then((dogs) => {
        dispatch({
          type: GET_DOG_ID,
          payload: dogs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

let searchDog = (name) => {
  return async (dispatch) => {
    return await axios
      .get(`${url}dogs?name=${name}`)
      .then((dogs) => {
        console.log(dogs.data);
        dispatch({
          type: SEARCH_DOG,
          payload: dogs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

let getTemperaments = () => {
  return async (dispatch) => {
    return await axios
      .get(`${url}temperaments`)
      .then((temperament) => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: temperament.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

let postDogs = (data) => {
  return async (dispatch) => {
    return await axios
      .post(`${url}dogs`, data)
      .then((dog) => {
        dispatch({
          type: POST_DOG,
          payload: dog,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};
const filterTemperament = (payload) => {
  return {
    type: FILTER_TEMPERAMENT,
    payload,
  };
};
const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};
const orderAlpha = (payload) => {
  return {
    type: ORDER_ALPHA,
    payload,
  };
};
const orderWeight = (payload) => {
  return {
    type: ORDER_WEIGHT,
    payload,
  };
};
export {
  getDogs,
  getDogId,
  searchDog,
  getTemperaments,
  postDogs,
  resetFilters,
  filterTemperament,
  filterCreated,
  orderAlpha,
  orderWeight,
};
