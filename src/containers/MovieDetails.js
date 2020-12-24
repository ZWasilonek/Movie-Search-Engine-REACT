import { connect } from "react-redux";
import MovieDetailsView from "../components/movie/MovieDetailsView";
import { loadMovieDetails } from "../redux/actions/fetchingActions";
import { getMovieDetails } from "../redux/selectors/movieDetailSelectors";
import { isRequestLoading, getFetchingError } from "../redux/selectors/fetchingSelectors";

const mapState = state => ({
  loading: isRequestLoading(state),
  error: getFetchingError(state),
  movie: getMovieDetails(state)
});

const mapDispatch = (dispatch, ownProps) => {
  const selectedMovieID = ownProps.match.params.movieID;
  return {
    loadMovieDetails: () => dispatch(loadMovieDetails(selectedMovieID))
  };
};

export default connect(mapState, mapDispatch)(MovieDetailsView);