import { createStore } from "redux";
import {SET_JOBS, ADD_TO_FAVORITES } from './actions/actions'

// ACTIONS



// REDUCER

const initialState = {
  jobs:[],
  favorites:[],

}

const reducer = (state = initialState, action) => {
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
