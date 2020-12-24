import { MOVIES_FETCHING, MOVIES_FETCHED, FETCHING_ERROR } from "../actions/actionsTypes";

let initialState = {
  isFetching: false,
  error: null,
  movie: ""
}

export const fetchMovies = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIES_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case MOVIES_FETCHED:
      return {
        ...state,
        isFetching: false,
        movies: payload.Search,
        error: null
      }
    case FETCHING_ERROR:
      return {
        ...state,
        isFetching: false,
        movies: [],
        error: payload.Error
      }
    default:
      return { ...state };
  };
};