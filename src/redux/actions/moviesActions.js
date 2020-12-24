import { 
  FETCHING_MOVIES,
  MOVIES_FETCHED,
  FETCHING_ERROR,
  SET_SEARCHED_TITLE,
  ADD_TO_WATCH,
  ADD_TO_WATCHED,
  REMOVE_FROM_MOVIES_TO_WATCH,
  REMOVE_FROM_WATCHED_MOVIES,
  SHOW_SELECTED_PAGE,
  MOVIE_DETAILS_FETCHED,
} from "./actionsTypes";

export const startFetching = () => ({
  type: FETCHING_MOVIES
});

export const getMovies = (movies) => ({
  type: MOVIES_FETCHED,
  payload: movies
});

export const setError = (error) => ({
  type: FETCHING_ERROR,
  payload: error
});

export const setSearchedTitle = (title) => ({
  type: SET_SEARCHED_TITLE,
  payload: title
});

export const addToWatch = movie => ({
  type: ADD_TO_WATCH,
  payload: movie
});

export const addToWatched = movie => ({
  type: ADD_TO_WATCHED,
  payload: movie
});

export const removeFromMoviesToWatch = (movie, rootPath) => ({
  type: REMOVE_FROM_MOVIES_TO_WATCH,
  payload: { movie, rootPath }
});

export const removeFromWatchedMovies = (movie, rootPath) => ({
  type: REMOVE_FROM_WATCHED_MOVIES,
  payload: { movie, rootPath }
});

export const showSelectedPage = moviesByPageNumber => ({
  type: SHOW_SELECTED_PAGE,
  payload: moviesByPageNumber
});

export const getMovieDetails = movieDetails => ({
  type: MOVIE_DETAILS_FETCHED,
  payload: movieDetails
});