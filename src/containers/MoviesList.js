import { connect } from "react-redux";
import MoviesListView from "../components/movieList/MoviesListView";
import { setPageNumber, setRootPath } from "../redux/actions/moviesActions";
import { isRequestLoading, getFetchingError } from "../redux/selectors/fetchingSelectors";

const mapState = (state) => ({
  loading: isRequestLoading(state),
  error: getFetchingError(state),
});

const mapDispatch = (dispatch) => ({
  setRootPath: (rootPath) => dispatch(setRootPath(rootPath)),
  changePageNumber: (pageNumber) => dispatch(setPageNumber(pageNumber))
});

export default connect(mapState, mapDispatch)(MoviesListView);