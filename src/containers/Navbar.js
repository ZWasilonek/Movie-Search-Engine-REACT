import { connect } from "react-redux";
import Navigation from "../components/main/Navbar";
import { loadMovies } from "../redux/actions/fetchingActions";
import { getSearchTitle } from "../redux/selectors/movieDetailSelectors";

const mapState = state => ({
  searchTitle: getSearchTitle(state)
});

const mapDispatch = dispatch => ({
  searchMovies: (searchTitle) => dispatch(loadMovies(searchTitle)),
});

export default connect(mapState, mapDispatch)(Navigation);