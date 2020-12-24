import { connect } from "react-redux";
import { loadMovies } from "../redux/actions/fetchingActions";
import { getAmountOfResults, getTotalPagesNumber } from "../redux/selectors/paginationSelectors";
import { getSearchTitle } from "../redux/selectors/movieDetailSelectors";
import { getAllFetchedMovies } from "../redux/selectors/moviesSelectors";
import HomeView from "../components/main/HomeView";
import store from "../redux/store";

const mapState = state => ({
  movies: getAllFetchedMovies(state),
  totalPages: getTotalPagesNumber(getAmountOfResults(state))
});

const mapDispatch = (dispatch) => ({
  loadMovies: page => dispatch(loadMovies(getSearchTitle(store.getState()), page))
});

export default connect(mapState, mapDispatch)(HomeView);