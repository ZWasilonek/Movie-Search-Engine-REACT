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
  SET_ROOT_PATH,
  SET_PAGE_NUMBER,
  CHANGE_RATING
} from "../actions/actionsTypes";

const initialState = {
  isFetching: false,
  error: null,
  movies: [],
  watchedMovies: [],
  moviesToWatch: [],
  moviesByPageNumber: [],
  totalResults: 0,
  movieTitle: "",
  movieDetails: null,
  rootPath: "",
  homePageIndex: 0,
  toWatchPageIndex: 0,
  watchedPageIndex: 0
}

export const moviesState = (state = initialState, { type, payload }) => {
  const WATCHED_MOVIES_PATH = "watched";
  const WANT_TO_WATCH_PATH = "toWatch";
  const HOME_PATH = "home";
  const HOME_INDEX_FIELD_NAME = "homePageIndex";
  const TO_WATCH_INDEX_FIELD_NAME = "toWatchPageIndex";
  const WATCHED_INDEX_FIELD_NAME = "watchedPageIndex"

  const selectedPath = state.rootPath;
  const isHomePath = selectedPath.includes(HOME_PATH);
  const isWatchedPath = selectedPath.includes(WATCHED_MOVIES_PATH);
  const isWantWatchPath = selectedPath.includes(WANT_TO_WATCH_PATH);

  switch (type) {
    case FETCHING_MOVIES:
      return {
        ...state,
        isFetching: true
      };

    case MOVIES_FETCHED:
      return {
        ...state,
        isFetching: false,
        movies: payload.Search,
        error: null,
        totalResults: Number(payload.totalResults)
      };

    case FETCHING_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload.Error
      };

    case SET_SEARCHED_TITLE:
      return {
        ...state,
        movieTitle: payload
      };

    case ADD_TO_WATCHED:
      const selectedWatchedMovie = state.movies.find(movie =>
        movie.imdbID === payload.imdbID && payload);
      return {
        ...state,
        watchedMovies: [selectedWatchedMovie, ...state.watchedMovies],
      };

    case ADD_TO_WATCH:
      const selectedMovieToWatch = state.movies.find(movie =>
        movie.imdbID === payload.imdbID && payload);
      return {
        ...state,
        moviesToWatch: [selectedMovieToWatch, ...state.moviesToWatch],
      };

    case REMOVE_FROM_MOVIES_TO_WATCH:
      const movieToWatch = payload;

      const watchedMovies = state.watchedMovies.map(movie => {
        if (movie.imdbID === movieToWatch.imdbID) movie = movieToWatch;
        return movie;
      });

      const filteredMoviesToWatch = state.moviesToWatch.filter((movie) =>
        movie.imdbID !== movieToWatch.imdbID);

      return {
        ...state,
        moviesToWatch: filteredMoviesToWatch,
        watchedMovies: watchedMovies,
        moviesByPageNumber: isWantWatchPath ? filteredMoviesToWatch : state.watchedMovies
      };

    case REMOVE_FROM_WATCHED_MOVIES:
      const watchedMovie = payload;

      const moviesToWatch = state.moviesToWatch.map(movie => {
        if (movie.imdbID === watchedMovie.imdbID) movie = watchedMovie;
        return movie;
      });

      const filteredWatchedMovies = state.watchedMovies.filter((movie) =>
        movie.imdbID !== watchedMovie.imdbID);

      return {
        ...state,
        watchedMovies: filteredWatchedMovies,
        moviesToWatch: moviesToWatch,
        moviesByPageNumber: isWatchedPath ? filteredWatchedMovies : state.moviesToWatch
      };

    case SHOW_SELECTED_PAGE:
      return {
        ...state,
        moviesByPageNumber: payload
      }

    case MOVIE_DETAILS_FETCHED:
      return {
        ...state,
        isFetching: false,
        movieDetails: payload
      }

    case SET_ROOT_PATH:
      return {
        ...state,
        rootPath: payload
      }

    case SET_PAGE_NUMBER:
      const selectedPageNumber = isWantWatchPath ? TO_WATCH_INDEX_FIELD_NAME :
        (isWatchedPath ? WATCHED_INDEX_FIELD_NAME :
          (isHomePath ? HOME_INDEX_FIELD_NAME : "ERROR"));
      return {
        ...state,
        [selectedPageNumber]: payload
      }

    case CHANGE_RATING:
      const modifiedMovie = payload;
      const modifiedWatchedMovies = state.watchedMovies.map(movie => {
        if (movie.imdbID === modifiedMovie.imdbID) movie = modifiedMovie;
        return movie;
      });
      return {
        ...state,
        watchedMovies: modifiedWatchedMovies
      }

    default:
      return { ...state };
  };
};