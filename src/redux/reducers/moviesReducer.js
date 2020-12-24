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
  MOVIE_DETAILS_FETCHED
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
  movieDetails: null
}

export const moviesState = (state = initialState, { type, payload }) => {
  //FIXME:
  console.log("payload", payload)

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
      const movieToWatch = payload.movie;
      const isToWatchPath = payload.rootPath.includes("toWatch");

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
        moviesByPageNumber: isToWatchPath ? filteredMoviesToWatch : state.watchedMovies
      };

    case REMOVE_FROM_WATCHED_MOVIES:
      const watchedMovie = payload.movie;
      const isWatchedPath = payload.rootPath.includes("watched");

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

    default:
      return { ...state };
  };
};