// Action Types
export const SET_JOBS = "SET_JOBS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

// Action Creators
export const setJobs = (jobs) => ({ type: SET_JOBS, payload: jobs });
export const addToFavorites = (company) => ({ type: ADD_TO_FAVORITES, payload: company });