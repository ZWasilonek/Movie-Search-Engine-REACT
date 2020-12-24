import { connect } from "react-redux";
import MovieView from "../components/movie/MovieView";
import { 
  addToWatch, 
  addToWatched, 
  removeFromMoviesToWatch, 
  removeFromWatchedMovies,
} from "../redux/actions/moviesActions";

const mapDispatch = (dispatch) => ({
  addToWatch: movie => dispatch(addToWatch(movie)),
  removeFromMoviesToWatch: (movie, rootPath) => dispatch(removeFromMoviesToWatch(movie, rootPath)),
  addToWatched: (movie) => dispatch(addToWatched(movie)),
  removeFromWatchedMovies: (movie, rootPath) => dispatch(removeFromWatchedMovies(movie, rootPath)),
});

export default connect(null, mapDispatch)(MovieView);