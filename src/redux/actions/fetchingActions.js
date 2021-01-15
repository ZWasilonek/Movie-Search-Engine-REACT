import { 
  startFetching, 
  setSearchedTitle, 
  setError, 
  getMovies, 
  getMovieDetails
} from "./moviesActions";

const OMDb_API_KEY = process.env.REACT_APP_OMDb_API_KEY;

const loadMovies = (title, page) => async dispatch => {
  dispatch(startFetching());

  title = setMovieTitle(title);
  dispatch(setSearchedTitle(title));

  if (typeof page === "undefined") page = 1;

  await fetch(`https://www.omdbapi.com/?s=${title}&page=${page}&type=movie&apikey=${OMDb_API_KEY}`)
    .then(response => response.json())
    .then(data => typeof data !== "undefined" && data.Response === "False" ?
      dispatch(setError(data)) :
      dispatch(getMovies(data))
    )
    .catch(error => dispatch(setError(error)));
}

function setMovieTitle(title) {
  if (typeof title === "undefined" || title === "") {
    title = "avengers"
  }
  return title;
};

const loadMovieDetails = (movieID) => async dispatch => {
  dispatch(startFetching());
  await fetch(`https://www.omdbapi.com/?i=${movieID}&plot=full&type=movie&apikey=${OMDb_API_KEY}`)
    .then(response => response.json())
    .then(data => typeof data !== "undefined" && data.Response === "False" ?
      dispatch(setError(data)) :
      dispatch(getMovieDetails(data))
    )
    .catch(error => dispatch(setError(error)));
}

export { loadMovies, loadMovieDetails }