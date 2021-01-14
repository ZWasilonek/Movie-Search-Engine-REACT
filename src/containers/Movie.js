import { connect } from "react-redux";
import MovieView from "../components/movie/MovieView";
import { 
  addToWatch, 
  addToWatched, 
  changeRating, 
  removeFromMoviesToWatch, 
  removeFromWatchedMovies,
} from "../redux/actions/moviesActions";

const mapDispatch = (dispatch) => ({
  addToWatch: (movie) => dispatch(addToWatch(movie)),
  removeFromMoviesToWatch: (movie) => dispatch(removeFromMoviesToWatch(movie)),
  addToWatched: (movie) => dispatch(addToWatched(movie)),
  removeFromWatchedMovies: (movie) => dispatch(removeFromWatchedMovies(movie)),
  changeRating: (movie) => dispatch(changeRating(movie))
});

export default connect(null, mapDispatch)(MovieView);