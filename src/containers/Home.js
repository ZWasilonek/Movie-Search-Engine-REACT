import { connect } from "react-redux";
import { loadMovies } from "../redux/actions/fetchingActions";
import {
  getAmountOfResults,
  getTotalPagesNumber,
  getHomePageIndex
} from "../redux/selectors/paginationSelectors";
import { getSearchTitle } from "../redux/selectors/movieDetailSelectors";
import { getAllFetchedMovies } from "../redux/selectors/moviesSelectors";
import HomeView from "../components/main/HomeView";
import store from "../redux/store";

const mapState = state => ({
  movies: getAllFetchedMovies(state),
  totalPages: getTotalPagesNumber(getAmountOfResults(state)),
  pageIndex: getHomePageIndex(state)
});

const mapDispatch = dispatch => ({
  loadMovies: () => dispatch(
    loadMovies(getSearchTitle(store.getState()), (getHomePageIndex(store.getState()) + 1))),
});

export default connect(mapState, mapDispatch)(HomeView);