import { createStore } from "redux";

// ACTIONS

export const setJobs = (jobs) => ({ type: "SET_JOBS", payload: jobs });
export const addToFavorites = (company) => ({ type: "ADD_TO_FAVORITES", payload: company });

// REDUCER

const reducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

// STORE

const store = createStore(reducer);
export default store;
